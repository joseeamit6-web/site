import { CyberScannerBackground } from './CyberScannerBackground';

export interface PortalUnderConstructionProps {
  heading?: string;
  statusText?: string;
  subtitle?: string;
  showSimulationIndicator?: boolean;
  className?: string;
}

export function PortalUnderConstruction({
  heading = 'Amit Joshi Portal',
  statusText = 'UNDER CONSTRUCTION',
  subtitle = 'WILL BE LIVE SOON',
  showSimulationIndicator = true,
  className = '',
}: PortalUnderConstructionProps) {
  return (
    <div
      className={`relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#030608] px-3 py-12 sm:px-8 ${className}`}
    >
      <CyberScannerBackground />

      <main className="relative z-10 flex w-full max-w-[1040px] flex-col items-center justify-center px-5 py-16 text-center sm:px-14 sm:py-28 md:py-32">
        {/* Four minimal cyan HUD corner brackets */}
        <span
          aria-hidden="true"
          className="portal-bracket-glow pointer-events-none absolute top-0 left-0 h-3.5 w-3.5 border-t border-l border-cyan-400/60 sm:h-4 sm:w-4"
        />
        <span
          aria-hidden="true"
          className="portal-bracket-glow pointer-events-none absolute top-0 right-0 h-3.5 w-3.5 border-t border-r border-cyan-400/60 sm:h-4 sm:w-4"
        />
        <span
          aria-hidden="true"
          className="portal-bracket-glow pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b border-l border-cyan-400/60 sm:h-4 sm:w-4"
        />
        <span
          aria-hidden="true"
          className="portal-bracket-glow pointer-events-none absolute right-0 bottom-0 h-3.5 w-3.5 border-r border-b border-cyan-400/60 sm:h-4 sm:w-4"
        />

        {/* Main Heading */}
        <h1 className="portal-heading-glow max-w-full text-[clamp(1.1rem,3.35vw,3.1rem)] leading-[1.2] font-semibold tracking-[0.16em] text-white uppercase sm:font-bold sm:tracking-[0.24em] lg:tracking-[0.3em]">
          {heading}
        </h1>

        {/* Status Badge */}
        <div
          role="status"
          aria-label={`Site status: ${statusText}`}
          className="portal-badge-glow mt-6 inline-flex items-center justify-center rounded-full border border-cyan-400/45 bg-cyan-950/20 px-6 py-2 backdrop-blur-[2px] sm:mt-8 sm:px-8 sm:py-2.5"
        >
          <span className="text-[10px] leading-none font-semibold tracking-[0.26em] text-[#18e6ff] uppercase sm:text-[11.5px] sm:tracking-[0.32em]">
            {statusText}
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-10 max-w-full text-[10px] leading-relaxed font-normal tracking-[0.22em] text-[#9aa8b6]/75 uppercase sm:mt-14 sm:text-[12px] sm:tracking-[0.34em]">
          {subtitle}
        </p>

        {/* Thin cyan decorative line beneath subtitle */}
        <div
          aria-hidden="true"
          className="mt-4 h-px w-7 bg-cyan-400/45 shadow-[0_0_8px_rgba(34,211,238,0.35)] sm:mt-5"
        />
      </main>

      {/* Unobtrusive simulation indicator */}
      {showSimulationIndicator && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed right-5 bottom-4 z-10 font-mono text-[9px] tracking-[0.24em] text-cyan-300/25 uppercase sm:right-7 sm:bottom-6"
        >
          DEMO SCAN · SIMULATION
        </div>
      )}
    </div>
  );
}
