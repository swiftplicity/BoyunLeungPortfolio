export default function Frame() {
  return (
    <div className="bg-[#1938d1] relative rounded-[4px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[4px] relative size-full">
          <p className="font-['Open_Sans:Light',_sans-serif] font-light leading-[16px] relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}