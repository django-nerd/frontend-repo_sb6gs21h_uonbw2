import { useEffect, useMemo, useState } from 'react'
import { Menu, X, Bell, Search, ChevronDown, Users, LineChart, KanbanSquare, CalendarDays, CreditCard, Plus, Filter, Mail, Phone, UserCircle2, DollarSign, BadgeCheck, AlertCircle } from 'lucide-react'
import Spline from '@splinetool/react-spline'

// Color tokens (Dark Whale Tones)
const colors = {
  bgPrimary: '#0A192F',
  bgSecondary: '#112240',
  bgTertiary: '#233554',
  text: '#CCD6F6',
  accentGold: '#E7C857', // softened amber/gold for dark mode
  accentTeal: '#64FFDA'
}

// Utility shadows + glass
const shadowClass = 'shadow-[0_20px_50px_rgba(0,0,0,0.6),0_10px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.03)]'
const glassClass = 'bg-white/5 backdrop-blur-md border border-white/10'
const ringHover = 'transition-shadow duration-200 hover:shadow-[0_0_0_3px_rgba(231,200,87,0.35)]'

const navItems = [
  { key: 'analytics', label: 'Analytics & Reporting', icon: LineChart },
  { key: 'clients', label: 'Client Management', icon: Users },
  { key: 'content', label: 'Content Planning', icon: CalendarDays },
  { key: 'workflow', label: 'Creative Workflows', icon: KanbanSquare },
  { key: 'finance', label: 'Finance & Invoices', icon: CreditCard }
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [active, setActive] = useState('analytics')
  const [loading, setLoading] = useState(false)

  // Simulated loading on view change
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 450)
    return () => clearTimeout(t)
  }, [active])

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bgPrimary, color: colors.text }}>
      {/* Subtle texture + vignette */}
      <div className="pointer-events-none fixed inset-0" style={{ background: 'radial-gradient(1200px 800px at 10% -10%, rgba(100,255,218,0.08), transparent), radial-gradient(1200px 800px at 90% 110%, rgba(231,200,87,0.06), transparent)' }} />
      <div className="pointer-events-none fixed inset-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cdefs%3E%3ClinearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%271%27 y2=%271%27%3E%3Cstop stop-color=%27%23233554%27/%3E%3Cstop offset=%271%27 stop-color=%270A192F%27/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%27160%27 height=%27160%27 fill=%27url(%23g)%27/%3E%3Cpath d=%27M0 80h160M80 0v160%27 stroke=%27%23ffffff10%27 stroke-width=%271%27/%3E%3C/svg%3E") }} />

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed z-40 h-screen w-72 ${glassClass} ${shadowClass} ${ringHover} transition-transform duration-300`} style={{ backgroundColor: colors.bgSecondary, transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.accentTeal}33, ${colors.accentGold}33)` }} />
              <div className="font-semibold tracking-wide">Dark Whale SAAS</div>
            </div>
            <button className="p-2 rounded-lg hover:bg-white/5" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <nav className="px-3 pt-2 space-y-1 overflow-y-auto h-[calc(100vh-80px)] pb-6">
            {navItems.map(({ key, label, icon: Icon }) => {
              const activeItem = active === key
              return (
                <button key={key} onClick={() => { setActive(key); setSidebarOpen(false) }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg ${shadowClass} ${ringHover}`} style={{ backgroundColor: activeItem ? '#0f2d2b' : 'transparent', boxShadow: activeItem ? '0 0 0 1px rgba(100,255,218,0.25), inset 0 0 25px rgba(100,255,218,0.08)' : undefined }}>
                  <span className="flex items-center justify-center w-8 h-8 rounded-md" style={{ background: activeItem ? 'linear-gradient(135deg, rgba(100,255,218,0.15), rgba(231,200,87,0.12))' : 'rgba(255,255,255,0.04)', color: activeItem ? colors.accentTeal : colors.text }}>
                    <Icon size={18} />
                  </span>
                  <span className="text-sm text-left flex-1" style={{ color: activeItem ? colors.accentTeal : colors.text }}>{label}</span>
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main area */}
        <div className="flex-1 min-h-screen w-full ml-0 md:ml-72">
          {/* Top Bar */}
          <header className={`sticky top-0 z-30 ${glassClass} ${shadowClass}`} style={{ backgroundColor: colors.bgTertiary }}>
            <div className="flex items-center gap-3 px-4 py-3 md:px-6">
              <button className="md:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setSidebarOpen(true)}>
                <Menu size={20} />
              </button>
              <div className={`flex-1 flex items-center gap-3 max-w-xl w-full ${glassClass} ${shadowClass} rounded-xl px-3 py-2`}>
                <Search size={18} className="opacity-70" />
                <input className="bg-transparent outline-none flex-1 text-sm placeholder:text-slate-300/50" placeholder="Suche in Dark Whale..." />
                <button className="text-xs px-2 py-1 rounded-md bg-white/5">/</button>
              </div>
              <button className="relative p-2 rounded-lg hover:bg-white/5">
                <Bell size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.accentTeal }} />
              </button>
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/5 cursor-pointer">
                <img className="w-8 h-8 rounded-full object-cover" src="https://i.pravatar.cc/64?img=12" alt="avatar" />
                <ChevronDown size={16} className="opacity-70" />
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="p-4 md:p-6 lg:p-8">
            {loading ? (
              <LoadingBlock />
            ) : (
              <>
                {active === 'analytics' && <AnalyticsView />}
                {active === 'clients' && <ClientsView />}
                {active === 'content' && <ContentView />}
                {active === 'workflow' && <WorkflowView />}
                {active === 'finance' && <FinanceView />}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function SectionShell({ title, subtitle, children, hero }) {
  return (
    <div className="space-y-6">
      {/* Hero with Spline scene (only if provided) */}
      {hero && (
        <div className={`${glassClass} ${shadowClass} rounded-2xl overflow-hidden relative`} style={{ height: 260, backgroundColor: '#0E203C' }}>
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0A192F]/50 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 80px rgba(10,25,47,0.9)' }} />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
            {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
          </div>
        </div>
      )}
      {!hero && (
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
            {subtitle && <p className="text-sm opacity-80 mt-1">{subtitle}</p>}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

function KPI({ label, value, diff = 0 }) {
  const positive = diff >= 0
  return (
    <div className={`${glassClass} ${shadowClass} rounded-2xl p-5`}> 
      <div className="text-sm opacity-80">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-3 text-xs inline-flex items-center gap-1 px-2 py-1 rounded-md" style={{ color: positive ? colors.accentTeal : '#ff7b7b', background: positive ? 'rgba(100,255,218,0.08)' : 'rgba(255,123,123,0.1)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
        {positive ? <BadgeCheck size={14} /> : <AlertCircle size={14} />}
        {positive ? '+' : ''}{diff}%
      </div>
    </div>
  )
}

function LineChartCard() {
  // Simple SVG line chart
  const points = useMemo(() => [8, 20, 12, 28, 18, 36, 24, 40, 26, 44, 38, 52], [])
  const max = 60
  const path = points.map((p, i) => `${(i / (points.length - 1)) * 100},${100 - (p / max) * 100}`).join(' ')
  return (
    <div className={`${glassClass} ${shadowClass} rounded-2xl p-5`}>
      <div className="flex items-center justify-between mb-3">
        <div className="font-medium">Monatliche Einnahmen</div>
        <div className="text-xs opacity-70">Letzte 12 Monate</div>
      </div>
      <svg viewBox="0 0 100 60" className="w-full h-40">
        <defs>
          <linearGradient id="lgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.accentTeal} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors.accentTeal} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline fill="none" stroke={colors.accentGold} strokeWidth="0.6" points={path} />
        <polygon points={`0,60 ${path.replaceAll(',', ' ')} 100,60`} fill="url(#lgrad)" opacity="0.35" />
      </svg>
    </div>
  )
}

function DonutChartCard() {
  const total = 100
  const teal = 62
  const gold = total - teal
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const tealOffset = circumference * (1 - teal / total)
  const goldOffset = circumference * (1 - gold / total)
  return (
    <div className={`${glassClass} ${shadowClass} rounded-2xl p-5`}>
      <div className="flex items-center justify-between mb-3">
        <div className="font-medium">Client-Verteilung</div>
        <div className="text-xs opacity-70">Aktiv vs. Inaktiv</div>
      </div>
      <div className="flex items-center gap-6">
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <circle cx="50" cy="50" r={radius} stroke="#1b2b45" strokeWidth="12" fill="none" />
          <circle cx="50" cy="50" r={radius} stroke={colors.accentTeal} strokeWidth="12" fill="none" strokeDasharray={circumference} strokeDashoffset={tealOffset} transform="rotate(-90 50 50)" />
          <circle cx="50" cy="50" r={radius} stroke={colors.accentGold} strokeWidth="12" fill="none" strokeDasharray={circumference} strokeDashoffset={goldOffset} transform="rotate(${(teal / total) * 360 - 90} 50 50)" opacity="0.85" />
          <text x="50" y="54" textAnchor="middle" style={{ fontSize: 10, fill: colors.text }}>100%</text>
        </svg>
        <div className="text-sm space-y-2">
          <Legend color={colors.accentTeal} label="Aktiv" value="62%" />
          <Legend color={colors.accentGold} label="Inaktiv/Lead" value="38%" />
        </div>
      </div>
    </div>
  )
}

function Legend({ color, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-3.5 h-3.5 rounded-sm" style={{ backgroundColor: color }} />
      <span className="opacity-90 flex-1">{label}</span>
      <span className="opacity-80">{value}</span>
    </div>
  )
}

function AnalyticsView() {
  return (
    <SectionShell title="Analytics & Reporting" subtitle="KPIs und schnelle Einblicke" hero>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KPI label="MRR" value="€ 48.900" diff={12.4} />
        <KPI label="Neue Clients" value="128" diff={4.1} />
        <KPI label="Churn" value="2.3%" diff={-0.6} />
        <KPI label="NPS" value="62" diff={3.0} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2"><LineChartCard /></div>
        <DonutChartCard />
      </div>
    </SectionShell>
  )
}

// Clients (CMS)
function ClientsView() {
  const [filter, setFilter] = useState('Alle')
  const [showModal, setShowModal] = useState(false)
  const [clients, setClients] = useState([
    { id: 1, name: 'Oceanic Labs', status: 'Aktiv', contact: 'Mara Chen', email: 'mara@oceanic.io', phone: '+49 30 1234 555', last: '2025-11-02' },
    { id: 2, name: 'Amber Wood GmbH', status: 'Lead', contact: 'Leon Hart', email: 'leon@amberwood.de', phone: '+49 40 9876 210', last: '2025-11-10' },
    { id: 3, name: 'Tealwave Studio', status: 'Inaktiv', contact: 'Rina Falk', email: 'rina@tealwave.co', phone: '+49 89 4567 111', last: '2025-10-28' },
  ])

  const filtered = clients.filter(c => (filter === 'Alle' ? true : c.status === filter))

  return (
    <SectionShell title="Client Management" subtitle="Verwalten Sie Kunden, Leads und Beziehungen">
      <div className="flex flex-wrap items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <button className={`${glassClass} ${shadowClass} ${ringHover} text-sm px-3 py-2 rounded-xl flex items-center gap-2`}>
            <Filter size={16} /> Filter
          </button>
          <select className={`${glassClass} ${shadowClass} rounded-xl text-sm px-3 py-2 bg-transparent outline-none` } value={filter} onChange={e => setFilter(e.target.value)}>
            {['Alle', 'Aktiv', 'Inaktiv', 'Lead'].map(s => <option key={s} value={s} className="bg-[#0A192F]">{s}</option>)}
          </select>
        </div>
        <button onClick={() => setShowModal(true)} className={`${shadowClass} ${ringHover} rounded-xl text-sm px-4 py-2 font-medium`} style={{ backgroundColor: colors.accentGold, color: '#0A192F' }}>
          <div className="flex items-center gap-2"><Plus size={16} /> Neuen Client hinzufügen</div>
        </button>
      </div>

      <div className={`${glassClass} ${shadowClass} rounded-2xl overflow-x-auto mt-4`}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider">
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Kontakt</th>
              <th className="px-4 py-3">E-Mail</th>
              <th className="px-4 py-3">Telefon</th>
              <th className="px-4 py-3">Letzter Kontakt</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id} className="border-t border-white/5">
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3"><StatusPill value={c.status} /></td>
                <td className="px-4 py-3 flex items-center gap-2"><UserCircle2 size={16} className="opacity-80" /> {c.contact}</td>
                <td className="px-4 py-3 flex items-center gap-2"><Mail size={16} className="opacity-80" /> {c.email}</td>
                <td className="px-4 py-3 flex items-center gap-2"><Phone size={16} className="opacity-80" /> {c.phone}</td>
                <td className="px-4 py-3">{c.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && <ClientModal onClose={() => setShowModal(false)} onAdd={(data) => setClients(prev => [{ id: Date.now(), ...data }, ...prev])} />}
    </SectionShell>
  )
}

function StatusPill({ value }) {
  const map = {
    'Aktiv': { bg: 'rgba(100,255,218,0.12)', fg: colors.accentTeal },
    'Inaktiv': { bg: 'rgba(255,123,123,0.12)', fg: '#ff9a9a' },
    'Lead': { bg: 'rgba(231,200,87,0.15)', fg: colors.accentGold }
  }
  const cfg = map[value] || map['Lead']
  return <span className="text-xs px-2 py-1 rounded-md" style={{ background: cfg.bg, color: cfg.fg, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}>{value}</span>
}

function ClientModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ name: '', status: 'Lead', contact: '', email: '', phone: '', last: new Date().toISOString().slice(0,10) })
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className={`${glassClass} ${shadowClass} rounded-2xl w-full max-w-lg relative p-5`} style={{ backgroundColor: colors.bgSecondary }}>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Neuen Client hinzufügen</div>
          <button className="p-2 rounded-lg hover:bg-white/5" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Name">
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none" />
          </Field>
          <Field label="Status">
            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none">
              {['Aktiv', 'Inaktiv', 'Lead'].map(s => <option key={s} value={s} className="bg-[#0A192F]">{s}</option>)}
            </select>
          </Field>
          <Field label="Kontaktperson">
            <input value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none" />
          </Field>
          <Field label="E-Mail">
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none" />
          </Field>
          <Field label="Telefon">
            <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none" />
          </Field>
          <Field label="Letzter Kontakt">
            <input type="date" value={form.last} onChange={e => setForm({ ...form, last: e.target.value })} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none" />
          </Field>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 rounded-xl bg-white/5" onClick={onClose}>Abbrechen</button>
          <button className={`${shadowClass} rounded-xl px-4 py-2 font-medium`} style={{ backgroundColor: colors.accentGold, color: '#0A192F' }} onClick={() => { onAdd(form); onClose() }}>Hinzufügen</button>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="text-sm space-y-1">
      <span className="opacity-80">{label}</span>
      <div>{children}</div>
    </label>
  )
}

// Content Planning (Calendar/Timeline) with simple drag-and-drop
function ContentView() {
  const [items, setItems] = useState([
    { id: 1, date: 1, type: 'Blogpost', status: 'Draft', title: 'Dark Mode Best Practices' },
    { id: 2, date: 4, type: 'Social Post', status: 'Scheduled', title: 'Q4 Launch Teaser' },
    { id: 3, date: 12, type: 'Newsletter', status: 'In Review', title: 'November Updates' },
    { id: 4, date: 18, type: 'Blogpost', status: 'Scheduled', title: 'Case Study: Tealwave' },
  ])

  const onDropTo = (day) => (e) => {
    const id = Number(e.dataTransfer.getData('id'))
    setItems(prev => prev.map(it => it.id === id ? { ...it, date: day } : it))
  }
  const onDragStart = (id) => (e) => e.dataTransfer.setData('id', String(id))

  return (
    <SectionShell title="Content Planning" subtitle="Kalenderansicht mit Drag & Drop">
      <div className={`${glassClass} ${shadowClass} rounded-2xl p-4`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {Array.from({ length: 21 }).map((_, i) => {
            const day = i + 1
            const todays = items.filter(it => it.date === day)
            return (
              <div key={day} onDragOver={(e) => e.preventDefault()} onDrop={onDropTo(day)} className="rounded-xl min-h-[120px] p-3 bg-white/5 border border-white/10">
                <div className="text-xs opacity-70 mb-2">{day}. Nov</div>
                <div className="space-y-2">
                  {todays.map(it => (
                    <div key={it.id} draggable onDragStart={onDragStart(it.id)} className={`${shadowClass} rounded-lg p-2 text-xs cursor-grab`} style={{ background: 'rgba(10,25,47,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">{it.title}</span>
                        <span className="px-1.5 py-0.5 rounded-md" style={{ background: statusColor(it.status).bg, color: statusColor(it.status).fg }}>{it.status}</span>
                      </div>
                      <div className="opacity-75 mt-1">{it.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}

function statusColor(s) {
  if (s === 'Draft') return { bg: 'rgba(231,200,87,0.14)', fg: colors.accentGold }
  if (s === 'In Review') return { bg: 'rgba(255,255,255,0.08)', fg: '#ffffff' }
  return { bg: 'rgba(100,255,218,0.14)', fg: colors.accentTeal }
}

// Workflow (Kanban)
function WorkflowView() {
  const initial = {
    'To Do': [
      { id: 1, title: 'Wireframe Landing', assignee: 'MC', priority: 'High' },
      { id: 2, title: 'Audit Content Plan', assignee: 'LF', priority: 'Low' },
    ],
    'In Progress': [
      { id: 3, title: 'Design Dashboard Widgets', assignee: 'RF', priority: 'Medium' },
    ],
    'Ready for Review': [
      { id: 4, title: 'Marketing Copy v2', assignee: 'AK', priority: 'High' },
    ],
    'Completed': [
      { id: 5, title: 'Client Onboarding Guide', assignee: 'MC', priority: 'Low' },
    ],
  }
  const [data, setData] = useState(initial)
  const [drag, setDrag] = useState(null)

  const onDragStart = (card, column) => (e) => {
    setDrag({ card, from: column })
    e.dataTransfer.effectAllowed = 'move'
  }
  const onDropTo = (column) => (e) => {
    e.preventDefault()
    if (!drag) return
    setData(prev => {
      const next = { ...prev }
      next[drag.from] = next[drag.from].filter(c => c.id !== drag.card.id)
      next[column] = [...next[column], drag.card]
      return next
    })
    setDrag(null)
  }

  const columns = Object.keys(data)
  return (
    <SectionShell title="Creative Workflows" subtitle="Kanban-Board mit Spalten">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {columns.map(col => (
          <div key={col} className={`${glassClass} ${shadowClass} rounded-2xl p-3 min-h-[280px]`} onDragOver={(e) => e.preventDefault()} onDrop={onDropTo(col)}>
            <div className="flex items-center justify-between mb-3">
              <div className="font-medium">{col}</div>
              <span className="text-xs opacity-70">{data[col].length}</span>
            </div>
            <div className="space-y-3">
              {data[col].map(card => (
                <div key={card.id} draggable onDragStart={onDragStart(card, col)} className={`${shadowClass} rounded-xl p-3 bg-white/5 border border-white/10 cursor-grab`}>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{card.title}</div>
                    <PriorityBadge value={card.priority} />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: 'linear-gradient(135deg, rgba(100,255,218,0.15), rgba(231,200,87,0.15))' }}>{card.assignee}</span>
                    <span className="text-xs opacity-75">Zugewiesen</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function PriorityBadge({ value }) {
  const map = {
    High: { c: '#ff9a9a' },
    Medium: { c: colors.accentGold },
    Low: { c: colors.accentTeal }
  }
  return <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: map[value].c, color: map[value].c }}>{value}</span>
}

// Finance
function FinanceView() {
  const [show, setShow] = useState(false)
  const [invoices, setInvoices] = useState([
    { id: 'INV-1024', client: 'Oceanic Labs', amount: 4200, status: 'Open' },
    { id: 'INV-1025', client: 'Amber Wood GmbH', amount: 2100, status: 'Paid' },
    { id: 'INV-1026', client: 'Tealwave Studio', amount: 980, status: 'Overdue' },
  ])

  const summary = useMemo(() => {
    const open = invoices.filter(i => i.status !== 'Paid')
    const paid = invoices.filter(i => i.status === 'Paid')
    const sum = (arr) => arr.reduce((a, b) => a + b.amount, 0)
    return {
      openCount: open.length, openSum: sum(open),
      paidCount: paid.length, paidSum: sum(paid)
    }
  }, [invoices])

  return (
    <SectionShell title="Finance & Invoices" subtitle="Zahlungen, Status und Rechnungen">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <SummaryCard title="Offene Rechnungen" icon={AlertCircle} value={`${summary.openCount} • € ${summary.openSum.toLocaleString('de-DE')}`} color={colors.accentGold} />
        <SummaryCard title="Bezahlt" icon={BadgeCheck} value={`${summary.paidCount} • € ${summary.paidSum.toLocaleString('de-DE')}`} color={colors.accentTeal} />
        <SummaryCard title="Einnahmen (Monat)" icon={DollarSign} value={`€ ${(summary.paidSum + summary.openSum).toLocaleString('de-DE')}`} color={colors.accentTeal} />
        <SummaryCard title="Ausstehend" icon={AlertCircle} value={`€ ${summary.openSum.toLocaleString('de-DE')}`} color="#ff9a9a" />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="font-medium">Rechnungen</div>
        <button onClick={() => setShow(true)} className={`${shadowClass} ${ringHover} rounded-xl text-sm px-4 py-2 font-medium`} style={{ backgroundColor: colors.accentGold, color: '#0A192F' }}>
          <div className="flex items-center gap-2"><Plus size={16} /> Neue Rechnung erstellen</div>
        </button>
      </div>

      <div className={`${glassClass} ${shadowClass} rounded-2xl overflow-x-auto mt-3`}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Betrag</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id} className="border-t border-white/5">
                <td className="px-4 py-3">{inv.id}</td>
                <td className="px-4 py-3">{inv.client}</td>
                <td className="px-4 py-3">€ {inv.amount.toLocaleString('de-DE')}</td>
                <td className="px-4 py-3"><InvoiceStatus status={inv.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {show && <InvoiceModal onClose={() => setShow(false)} onCreate={(inv) => setInvoices(prev => [inv, ...prev])} />}
    </SectionShell>
  )
}

function SummaryCard({ title, icon: Icon, value, color }) {
  return (
    <div className={`${glassClass} ${shadowClass} rounded-2xl p-5`}> 
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm opacity-80">{title}</div>
          <div className="mt-1 text-xl font-semibold">{value}</div>
        </div>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', color }}>
          <Icon size={18} />
        </div>
      </div>
    </div>
  )
}

function InvoiceStatus({ status }) {
  const map = {
    Open: { bg: 'rgba(231,200,87,0.15)', fg: colors.accentGold },
    Paid: { bg: 'rgba(100,255,218,0.15)', fg: colors.accentTeal },
    Overdue: { bg: 'rgba(255,123,123,0.15)', fg: '#ff9a9a' },
  }
  const cfg = map[status]
  return <span className="text-xs px-2 py-1 rounded-md" style={{ background: cfg.bg, color: cfg.fg, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}>{status}</span>
}

function InvoiceModal({ onClose, onCreate }) {
  const [items, setItems] = useState([{ desc: '', amount: 0 }])
  const [client, setClient] = useState('')
  const total = items.reduce((a, b) => a + Number(b.amount || 0), 0)

  const addItem = () => setItems(prev => [...prev, { desc: '', amount: 0 }])
  const updateItem = (idx, field, value) => setItems(prev => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className={`${glassClass} ${shadowClass} rounded-2xl w-full max-w-2xl relative p-5`} style={{ backgroundColor: colors.bgSecondary }}>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Neue Rechnung</div>
          <button className="p-2 rounded-lg hover:bg-white/5" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Client">
            <input value={client} onChange={e => setClient(e.target.value)} className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none" />
          </Field>
          <Field label="Währung">
            <select className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none">
              <option className="bg-[#0A192F]">EUR</option>
              <option className="bg-[#0A192F]">USD</option>
            </select>
          </Field>
        </div>
        <div className="mt-4 space-y-2">
          {items.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2">
              <input placeholder="Beschreibung" value={row.desc} onChange={e => updateItem(idx, 'desc', e.target.value)} className="col-span-8 bg-white/5 rounded-lg px-3 py-2 outline-none" />
              <input placeholder="Betrag" type="number" value={row.amount} onChange={e => updateItem(idx, 'amount', e.target.value)} className="col-span-4 bg-white/5 rounded-lg px-3 py-2 outline-none" />
            </div>
          ))}
          <button onClick={addItem} className="text-sm px-3 py-1.5 rounded-lg bg-white/5">Position hinzufügen</button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm opacity-80">Gesamt</div>
          <div className="text-xl font-semibold">€ {total.toLocaleString('de-DE')}</div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 rounded-xl bg-white/5" onClick={onClose}>Abbrechen</button>
          <button className={`${shadowClass} rounded-xl px-4 py-2 font-medium`} style={{ backgroundColor: colors.accentGold, color: '#0A192F' }} onClick={() => { onCreate({ id: `INV-${Math.floor(Math.random()*9000+1000)}`, client, amount: total, status: 'Open' }); onClose() }}>Erstellen</button>
        </div>
      </div>
    </div>
  )
}

function LoadingBlock() {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.accentTeal }} />
        <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.accentTeal, animationDelay: '0.15s' }} />
        <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.accentTeal, animationDelay: '0.3s' }} />
      </div>
    </div>
  )
}

export default App
