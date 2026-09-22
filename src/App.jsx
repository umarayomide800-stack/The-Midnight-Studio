import { useEffect, useState } from 'react';

const navigation = [
  ['The Space', '#space'],
  ['Equipment', '#equipment'],
  ['House Rules', '#house-rules'],
  ['Rates', '#rates'],
];

const experiences = [
  ['01', 'Private sessions', 'Time and space for one-to-one work, partner play, or a carefully held scene.'],
  ['02', 'Small gatherings', 'Host your people in a setting built for connection, curiosity, and discretion.'],
  ['03', 'Curated events', 'Step into an evening shaped around a point of view, a mood, or a shared appetite.'],
];

const rules = [
  ['01', 'Strict Consent', 'All activities require enthusiastic, informed, and ongoing consent. Respect a no, a pause, or a changed mind immediately. No coercion, intoxication, or non-consensual recording is permitted.'],
  ['02', 'Sanitation & Clean-Up Protocols', 'Use the supplied barriers and cleaning products as directed. Clean and disinfect every surface and piece of equipment after use, then return the room to its original condition before departure.'],
  ['03', 'No Unvetted Guests', 'Only approved guests listed during the booking may enter. Guest changes must be disclosed and cleared in advance. Never share the studio address or access details.'],
  ['04', 'Sound & Privacy Considerations', 'Keep sound at a considerate level and respect the privacy of neighbors and other guests. Photography or filming requires prior agreement and may never include another person without explicit permission.'],
  ['05', 'Equipment Handling', 'Use equipment only for its intended purpose and ask before using anything unfamiliar. Report damage or malfunction immediately. Unsafe, modified, or improvised use is not permitted.'],
];

function Logo() {
  return <a className="flex items-center gap-3" href="#top" aria-label="The Midnight Studio home"><span className="brand-mark">TMS</span><span className="font-serif text-xl font-semibold">The Midnight Studio</span></a>;
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="absolute z-20 w-full py-5 sm:py-7">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between gap-6 sm:w-[min(1180px,calc(100%-80px))]">
        <Logo />
        <button className="flex items-center gap-2 md:hidden" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-[10px] uppercase tracking-[.14em]">Menu</span><span className="grid w-5 gap-1"><i className="h-px bg-current" /><i className="h-px bg-current" /></span>
        </button>
        <nav id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[72px] flex-col gap-0 bg-[#e0e0e0] p-4 text-[#0d0d0d] shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:text-[#e0e0e0] md:shadow-none`} aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a key={href} className="border-b border-black/15 py-3 text-xs uppercase tracking-[.1em] transition-colors hover:text-[#c5a059] md:border-0 md:py-0 md:normal-case md:tracking-normal" href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="mt-3 border border-[#c5a059] px-4 py-3 text-center text-[10px] uppercase tracking-[.1em] text-[#c5a059] transition-all hover:bg-[#c5a059] hover:text-[#0d0d0d] md:mt-0" href="#rates" onClick={() => setMenuOpen(false)}>Inquire / Book <span aria-hidden="true">&nearr;</span></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return <section className="hero-surface relative flex min-h-[720px] items-center overflow-hidden sm:min-h-[820px]" aria-labelledby="hero-title">
    <div className="hero-grain" aria-hidden="true" />
    <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-32px))] sm:w-[min(1180px,calc(100%-80px))]">
      <p className="eyebrow reveal">Private dungeon / discreet experiences</p>
      <h1 id="hero-title" className="reveal mt-5 max-w-4xl font-serif text-[clamp(3.8rem,9vw,8.25rem)] leading-[.88]">A Sanctuary for<br /><em>Discreet Exploration</em></h1>
      <p className="reveal reveal-delay-2 mt-8 max-w-[420px] text-[17px] text-white/75">A considered space for private sessions, intimate gatherings, and fully equipped dungeon rental in an atmosphere built around trust.</p>
      <div className="reveal reveal-delay-3 mt-9 flex max-w-sm flex-col gap-3 sm:flex-row sm:max-w-none"><a className="button button-brass" href="#space">View Dungeon Space <span>&nearr;</span></a><a className="button button-outline" href="#rates">Request Access <span>&nearr;</span></a></div>
    </div>
    <div className="absolute bottom-5 left-4 right-4 z-10 flex justify-between text-[9px] uppercase tracking-[.14em] text-white/60 sm:bottom-9 sm:left-10 sm:right-10"><span>Explore <b className="ml-3 inline-block w-14 border-t border-current align-middle" /></span><span>Est. 2024&nbsp;&nbsp;&nbsp; Private / By invitation</span></div>
  </section>;
}

function StudioSection() {
  return <section id="space" className="section-pad bg-[#101010]"><div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-9 sm:w-[min(1180px,calc(100%-80px))] md:grid-cols-[1fr_1.6fr_1.3fr] md:gap-12"><div className="section-label reveal"><span>01</span><span>Inside the studio</span></div><div className="reveal reveal-delay-1"><p className="eyebrow">A private environment</p><h2>The right atmosphere changes everything.</h2><p className="max-w-[420px] text-[#9b9b9b]">Hidden behind an unassuming door, The Midnight Studio is a deliberately designed space for private sessions, small gatherings, and immersive nights that stay with you.</p><a className="text-link" href="#rates">See the space <span>&nearr;</span></a></div><div className="intro-visual reveal reveal-delay-2" role="img" aria-label="Moody red-lit private studio interior"><span>01 / 03&nbsp;&nbsp;&nbsp; Light, texture, privacy</span></div></div></section>;
}

function ExperienceSection() {
  return <section id="equipment" className="section-pad bg-[#171717]"><div className="mx-auto w-[min(1180px,calc(100%-32px))] sm:w-[min(1180px,calc(100%-80px))]"><div className="mb-12 grid gap-8 sm:mb-20 md:grid-cols-[1fr_2.9fr]"><div className="section-label reveal"><span>02</span><span>Ways to enter</span></div><div className="reveal"><p className="eyebrow">What brings you here</p><h2>Make the night<br /><em>your own.</em></h2></div></div><div className="border-t border-white/20">{experiences.map(([number, title, copy], index) => <article key={number} className="group grid grid-cols-[35px_1fr_28px] items-center gap-4 border-b border-white/20 py-7 transition-all hover:bg-[#6b0000]/10 hover:px-3 md:grid-cols-[1fr_2.9fr_40px] md:gap-12"><span className="text-[11px] tracking-[.1em] text-[#6b0000]">{number}</span><div><h3 className="mb-2">{title}</h3><p className="mb-0 max-w-[420px] text-[#9b9b9b]">{copy}</p></div><span className="text-2xl text-[#c5a059]">&nearr;</span></article>)}</div></div></section>;
}

function RulesSection() {
  const [openRule, setOpenRule] = useState(0);
  return <section id="house-rules" className="section-pad bg-[#220000]"><div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-9 sm:w-[min(1180px,calc(100%-80px))] md:grid-cols-[1fr_1.5fr] md:gap-12"><div className="reveal"><div className="section-label"><span>03</span><span>House rules</span></div><p className="eyebrow mt-8">Code of conduct</p><h2>The standard is<br /><em>care.</em></h2><p className="max-w-[360px] text-white/70">Every booking begins with a shared understanding of how we protect the space, each other, and the quality of the experience.</p></div><div className="border-t border-white/25">{rules.map(([number, title, copy], index) => <div className="border-b border-white/25" key={number}><button className="grid w-full grid-cols-[35px_1fr_20px] items-center gap-3 py-6 text-left transition-colors hover:text-[#c5a059] md:grid-cols-[45px_1fr_25px] md:gap-5" onClick={() => setOpenRule(openRule === index ? -1 : index)} aria-expanded={openRule === index}><span className="text-[11px] tracking-[.1em] text-[#f0c1b6]">{number}</span><strong className="font-serif text-[1.4rem] leading-tight md:text-[2rem]">{title}</strong><span className={`text-2xl text-[#c5a059] transition-transform ${openRule === index ? 'rotate-45' : ''}`}>+</span></button>{openRule === index && <p className="mb-6 ml-12 max-w-xl text-sm text-white/70 md:ml-16">{copy}</p>}</div>)}</div></div></section>;
}

function BookingSection({ onSubmitted }) {
  const [date, setDate] = useState('');
  const minDate = new Date().toISOString().split('T')[0];
  const submit = (event) => { event.preventDefault(); onSubmitted(); event.currentTarget.reset(); setDate(''); };
  return <section id="rates" className="section-pad bg-[#121212]"><div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-9 sm:w-[min(1180px,calc(100%-80px))] md:grid-cols-[.85fr_1.5fr] md:gap-20"><div className="md:sticky md:top-8 md:self-start"><p className="eyebrow">Vetting &amp; reservation</p><h2>Request your<br /><em>private session.</em></h2><p className="max-w-[410px] text-[#9b9b9b]">Tell us what you are planning and we will follow up with availability, rates, and next steps. All requests are reviewed privately.</p><p className="mt-8 text-xs text-[#9b9b9b]">Required fields are marked <span className="text-[#c5a059]">*</span>.</p></div><form className="border border-[#c5a059]/40 bg-[#181818] p-5 sm:p-8" onSubmit={submit}><div className="grid gap-5 sm:grid-cols-2"><Field label="Full Legal Name" name="legal-name" required /><Field label="Scene Name / Moniker" name="scene-name" /><Field label="Email" name="email" type="email" required /><Field label="Phone Number" name="phone" type="tel" required /><Field label="Requested Date" name="date" type="date" min={minDate} required value={date} onChange={(event) => setDate(event.target.value)} /><SelectField label="Time Slot" name="time-slot" options={['Daytime, 10am - 3pm', 'Evening, 4pm - 9pm', 'Late night, 10pm - 2am']} required /><SelectField className="sm:col-span-2" label="Type of Rental" name="rental-type" options={['Private Session', 'Content Creation / Photography', 'Event Rental']} required /><Field className="sm:col-span-2" label="Equipment Needed" name="equipment" as="textarea" /><Field className="sm:col-span-2" label="Experience / References" name="references" as="textarea" required /></div><label className="mt-6 flex items-start gap-3 text-xs text-[#9b9b9b]"><input className="mt-1 accent-[#c5a059]" type="checkbox" required /><span>I have read and agree to follow the <a className="text-[#c5a059] underline" href="#house-rules">House Rules &amp; Code of Conduct</a>. <b className="text-[#c5a059]">*</b></span></label><button className="button button-dark mt-6" type="submit">Submit Request <span>&nearr;</span></button></form></div></section>;
}

function Field({ label, name, type = 'text', required = false, as = 'input', className = '', ...props }) { const Tag = as; return <label className={`flex flex-col gap-2 text-[11px] uppercase tracking-[.08em] ${className}`}><span>{label} {required && <b className="text-[#c5a059]">*</b>}</span><Tag className="field-control" name={name} type={as === 'input' ? type : undefined} required={required} {...props} /></label>; }
function SelectField({ label, name, options, required, className = '' }) { return <label className={`flex flex-col gap-2 text-[11px] uppercase tracking-[.08em] ${className}`}><span>{label} <b className="text-[#c5a059]">*</b></span><select className="field-control" name={name} required={required}><option value="">Select a slot</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>; }

function Footer() { return <footer className="border-t border-[#c5a059]/40 bg-gradient-to-b from-[#121212] to-[#0d0d0d] py-16"><div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 sm:w-[min(1180px,calc(100%-80px))] sm:grid-cols-2 md:grid-cols-4"><div className="sm:col-span-2 md:col-span-1"><Logo /><p className="mt-6 text-[10px] uppercase tracking-[.14em] text-[#c5a059]">Private / By invitation</p></div><FooterBlock title="Discretion">Exact location address provided upon vetted reservation confirmation.</FooterBlock><FooterBlock title="Hours & contact">Wednesday - Sunday<br />10am - 2am by reservation<br /><a className="mt-3 inline-block text-[#e0e0e0]" href="mailto:hello@themidnightstudio.com">hello@themidnightstudio.com</a></FooterBlock><FooterBlock title="Good to know">All guests must be 21 or older. Participation is voluntary and subject to our House Rules. Guests accept responsibility for their own conduct and use of the studio.<br /><br /><a className="text-[#c5a059]" href="#house-rules">Privacy &amp; safety policy</a> / <a className="text-[#c5a059]" href="#house-rules">Terms &amp; liability</a></FooterBlock><div className="flex flex-col gap-2 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[.14em] text-white/40 sm:col-span-2 md:col-span-4 md:flex-row md:justify-between"><span>© {new Date().getFullYear()} The Midnight Studio. All rights reserved.</span><span>Private venue / Confidential correspondence</span></div></div></footer>; }
function FooterBlock({ title, children }) { return <div className="text-xs leading-relaxed text-[#9b9b9b]"><h3 className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[.14em] text-[#c5a059]">{title}</h3><p>{children}</p></div>; }

export default function App() { const [menuOpen, setMenuOpen] = useState(false); const [toast, setToast] = useState(false); useEffect(() => { if (!toast) return undefined; const timeout = setTimeout(() => setToast(false), 5000); return () => clearTimeout(timeout); }, [toast]); return <div id="top" className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0]"><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><StudioSection /><ExperienceSection /><RulesSection /><BookingSection onSubmitted={() => setToast(true)} /></main><Footer />{toast && <div className="fixed bottom-6 right-5 z-50 w-[min(390px,calc(100%-40px))] border-l-2 border-[#c5a059] bg-[#252525] p-5 shadow-2xl" role="alert"><button className="absolute right-3 top-2 text-2xl text-[#c5a059]" onClick={() => setToast(false)} aria-label="Close confirmation">&times;</button><strong className="block font-serif text-xl">Request received.</strong><span className="text-xs text-[#9b9b9b]">We will be in touch privately with next steps.</span></div>}</div>; }
