import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LuSend } from "react-icons/lu";
import { contactInfo } from "../../../data/siteContent";
import "./ContactForm.css";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(80, "Nome muito longo."),
  contact: z
    .string()
    .trim()
    .min(5, "Informe um e-mail ou telefone para retorno.")
    .max(120, "Contato muito longo."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais para que possamos ajudar.")
    .max(1000, "Mensagem muito longa."),
});

const WHATSAPP_NUMBER = "553125264248";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const text = [
      `Olá! Meu nome é ${data.name}.`,
      data.message,
      `Contato para retorno: ${data.contact}`,
    ].join("\n\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-field">
        <label htmlFor="cf-name">Nome</label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p className="contact-error" id="cf-name-error" role="alert">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className="contact-field">
        <label htmlFor="cf-contact">E-mail ou telefone</label>
        <input
          id="cf-contact"
          type="text"
          autoComplete="email"
          aria-invalid={errors.contact ? "true" : "false"}
          aria-describedby={errors.contact ? "cf-contact-error" : undefined}
          {...register("contact")}
        />
        {errors.contact ? (
          <p className="contact-error" id="cf-contact-error" role="alert">
            {errors.contact.message}
          </p>
        ) : null}
      </div>

      <div className="contact-field">
        <label htmlFor="cf-message">Mensagem</label>
        <textarea
          id="cf-message"
          rows={4}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p className="contact-error" id="cf-message-error" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn btn--primary btn--lg contact-submit">
        <LuSend size={18} aria-hidden="true" focusable="false" />
        Enviar pelo WhatsApp
      </button>

      {isSubmitSuccessful ? (
        <p className="contact-success" role="status">
          Tudo certo — abrimos o WhatsApp com sua mensagem pronta para envio. Se
          não abrir, fale com a gente pelo {contactInfo.phone}.
        </p>
      ) : (
        <p className="contact-note">
          Ao enviar, abrimos uma conversa no WhatsApp com sua mensagem já
          escrita. Nenhum dado é armazenado neste site.
        </p>
      )}
    </form>
  );
}
