export default function Terminal() {
  return (
    <div className="relative z-10 w-full max-w-sm rounded-xl overflow-hidden border border-accent/25 shadow-[0_14px_44px_rgba(0,0,0,0.4)] bg-[#0a0e17] font-mono text-xs">
      <div className="flex items-center gap-1.5 bg-[#131c2b] px-3.5 py-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
        <span className="ml-auto text-[10px] text-slate-500">
          awel@astu: ~/portfolio
        </span>
      </div>
      <div className="p-4 leading-8 text-[#e2e8f0]">
        <p>
          <span className="text-[#28c940]">awel@astu</span>:
          <span className="text-[#60a5fa]">~</span>$ whoami
        </p>
        <p className="text-slate-400">penetration-tester &amp; software-engineer</p>
        <p>
          <span className="text-[#28c940]">awel@astu</span>:
          <span className="text-[#60a5fa]">~</span>$ cat focus.txt
        </p>
        <p className="text-slate-400">web-security | vuln-assessment | CTFs | red-teaming</p>
        <p>
          <span className="text-[#28c940]">awel@astu</span>:
          <span className="text-[#60a5fa]">~</span>$ nmap -sV status.me
        </p>
        <p className="text-slate-400">PORT&nbsp;&nbsp;&nbsp;STATE&nbsp;&nbsp;SERVICE</p>
        <p className="text-slate-400">
          open&nbsp;&nbsp;&nbsp;<span className="text-[#28c940] font-bold">open</span>&nbsp;&nbsp;&nbsp;hire-me.io
        </p>
        <p>
          <span className="text-[#28c940]">awel@astu</span>:
          <span className="text-[#60a5fa]">~</span>${" "}
          <span className="cursor-blink">_</span>
        </p>
      </div>
    </div>
  );
}
