import { Img, Phone } from "@/components/ui";

const TEAM = ["Riyan Ainur Rahman", "M. Rahsya Nadibia", "M. Farros Mufid A.", "Abisena Rais", "Sarah Fajriah R."];

export default function Intro() {
  return (
    <>
      <div className="absolute top-[25px] left-[22px] h-[485px] w-[458px] overflow-hidden rounded-[26px] border-[2.5px] border-or bg-[radial-gradient(circle_at_50%_85%,#FEF3E7_0%,#fff_70%)]">
        <b className="absolute top-[26px] left-[36px] text-[112px] font-medium tracking-[-2px] text-or">2026</b>
        <Img src="/assets/hamster.webp" alt="Saku hamster mascot holding a coin" className="absolute bottom-3 left-[92px] w-[280px] drop-shadow-[0_14px_18px_rgba(217,129,46,.25)]" />
      </div>

      <div className="absolute top-[25px] left-[498px] h-[485px] w-[1397px] rounded-[26px] bg-[linear-gradient(100deg,#F0A353_0%,#F4B964_55%,#F8D272_100%)] px-[86px] py-[108px] text-white">
        <h1 className="text-[156px] leading-[0.95] font-semibold tracking-[-3px]">Saku</h1>
        <p className="mt-1.5 text-[82px] font-normal tracking-[-1px]">Number over Address</p>
      </div>

      <div className="absolute top-[532px] left-[22px] h-[528px] w-[975px] overflow-hidden rounded-[26px] bg-[#F7F4F1]">
        <Img
          src="/assets/intro-collage.png"
          alt="Saku app screens: split bill, home with recent activity, a packet preview, and the transfer confirm screen"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute top-[532px] left-[1017px] flex h-[528px] w-[425px] flex-col rounded-[26px] border-[2.5px] border-dashed border-or px-[18px] pt-[18px] pb-[18px]">
        <div className="mb-3 flex items-center gap-3 px-1">
          <Img src="/assets/saku-mark.png" alt="" className="w-[42px]" />
          <b className="text-[24px] font-semibold text-ink">The Team</b>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {TEAM.map((n) => (
            <div key={n} className="flex flex-1 items-center gap-4 rounded-2xl bg-peach px-5 text-[23px] font-medium text-or-d">
              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-semibold text-or">
                {n
                  .split(" ")
                  .filter((w) => /^[A-Z]/.test(w))
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              {n}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[532px] left-[1470px] h-[528px] w-[425px] overflow-hidden rounded-[26px] bg-[linear-gradient(160deg,#F8D272,#F4B964)]">
        <div className="absolute -right-[80px] -bottom-[80px] h-[300px] w-[300px] rounded-full bg-white/20" />
        <Phone
          src="/assets/screen-home.webp"
          alt="Saku home screen showing a 61.65 USDC balance"
          className="absolute! top-[38px] left-[52px] w-[320px]"
        />
      </div>
    </>
  );
}
