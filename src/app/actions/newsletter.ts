"use server";

import { createClient } from "@/lib/supabase/server";

interface SubscribeNewsletterResult {
  success: boolean;
  message: string;
}

export async function subscribeNewsletter(
  email: string,
  name?: string
): Promise<SubscribeNewsletterResult> {
  const supabase = await createClient();

  try {
    // Check if email already exists
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, subscribed")
      .eq("email", email)
      .single();

    if (existing) {
      if (existing.subscribed) {
        return {
          success: false,
          message: "You're already subscribed to our newsletter!",
        };
      } else {
        // Resubscribe
        const { error } = await supabase
          .from("newsletter_subscribers")
          .update({
            subscribed: true,
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null,
          })
          .eq("id", existing.id);

        if (error) throw error;

        return {
          success: true,
          message: "Welcome back! You've been resubscribed to our newsletter.",
        };
      }
    }

    // Insert new subscriber
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      name: name || null,
      subscribed: true,
      subscribed_at: new Date().toISOString(),
    });

    if (error) throw error;

    return {
      success: true,
      message: "Thanks for subscribing! Check your inbox for confirmation.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
