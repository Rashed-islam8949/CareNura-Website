"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm the CareNura AI assistant. How can I help you accelerate your digital growth today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send a simplified messages array for the AI API
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages([...newMessages, { id: Date.now().toString(), role: "assistant", content: data.text }]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          aria-label="Open AI Chat"
        >
          <span className="absolute inset-0 rounded-full bg-teal-400 opacity-50 group-hover:animate-ping" />
          <Bot className="w-6 h-6 text-white relative z-10" />
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-3rem)] sm:w-[400px] bg-background/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 origin-bottom-right flex flex-col ${
          isOpen ? "scale-100 opacity-100 h-[550px] max-h-[calc(100vh-6rem)]" : "scale-50 opacity-0 pointer-events-none h-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-white/[0.03] border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-600/10 -z-10" />
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-[0_0_10px_rgba(45,212,191,0.5)]">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white leading-none mb-1">CareNura AI</h3>
              <p className="text-xs text-white/50">Ask me anything</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 max-w-[85%] ${
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              }`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${
                  msg.role === "user"
                    ? "bg-white/10 border border-white/20"
                    : "bg-teal-500/20 border border-teal-500/30 text-teal-400"
                }`}
              >
                {msg.role === "user" ? <User className="w-4 h-4 text-white/70" /> : <Bot className="w-4 h-4" />}
              </div>
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white rounded-tr-sm"
                    : "bg-white/[0.03] border border-white/5 text-white/80 rounded-tl-sm shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-start gap-3 max-w-[85%] mr-auto animate-pulse">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/5 rounded-tl-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/[0.02] border-t border-white/5">
          {error && (
            <div className="text-red-400 text-xs text-center mb-2 bg-red-500/10 py-1 rounded">
              {error}
            </div>
          )}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 relative bg-white/5 border border-white/10 rounded-full p-1 focus-within:bg-white/10 focus-within:border-teal-500/50 transition-colors"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-sm text-white px-4 py-2 outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
            </button>
          </form>
          <div className="text-center mt-3">
            <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Powered by CareNura AI</span>
          </div>
        </div>
      </div>
    </>
  );
}
