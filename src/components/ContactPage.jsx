import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const email = "yourshopemail@example.com"; // replace with shop email or use mailto
  const subject = encodeURIComponent("Website contact from customer");
  const bodyPrefix = (n, m) => encodeURIComponent(`Name: ${n}\n\nMessage:\n${m}`);
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="w-full p-2 border rounded mb-3" />
      <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Message" className="w-full p-2 border rounded mb-3" rows="6" />
      <a
        href={`mailto:${email}?subject=${subject}&body=${bodyPrefix(name, msg)}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send Email
      </a>
    </div>
  );
}
