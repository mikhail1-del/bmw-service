"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TeslaButton } from "@/components/TeslaButton";

interface ContactFormProps {
  className?: string;
}

const inputClass =
  "w-full border-b border-tesla-border bg-transparent py-4 text-base text-tesla-black placeholder:text-tesla-text/50 transition-colors focus:border-tesla-black focus:outline-none";

export function ContactForm({ className }: ContactFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("py-12 text-center", className)}
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-tesla-red" />
        <h3 className="mt-4 text-xl font-bold text-tesla-black">
          Заявка отправлена
        </h3>
        <p className="mt-2 text-tesla-text">Мы свяжемся с вами в ближайшее время.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-8", className)}>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Телефон
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон"
          className={inputClass}
        />
      </div>

      <TeslaButton type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Отправить"
        )}
      </TeslaButton>
    </form>
  );
}
