import { FaHammer } from "react-icons/fa";

const DryCatchCard = () => {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--surface)] rounded-3xl p-8 md:p-10 border border-[var(--primary)]/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <FaHammer size={160} />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-2xl flex items-center justify-center">
              <FaHammer className="text-[var(--primary)] text-2xl" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-1 opacity-70">
                Currently Building
              </p>
              <h3 className="text-xl font-black text-[var(--foreground)] mb-1">
                DryCatch — Production E-Commerce Platform
              </h3>
              <p className="text-[var(--foreground)] opacity-60 text-sm leading-relaxed">
                FastAPI · PostgreSQL · Paystack · React · Full RBAC · Admin Panel. Live in production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryCatchCard;
