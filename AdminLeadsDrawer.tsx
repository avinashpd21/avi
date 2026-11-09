import React, { useEffect, useState } from 'react';
import {
  X,
  ShieldCheck,
  Phone,
  MessageCircle,
  Clock,
  User,
  Mail,
  RefreshCw,
  Search,
  Filter,
  CheckCircle,
} from 'lucide-react';
import { db } from '../firebase/config.ts';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { Inquiry } from '../types/index.ts';

interface AdminLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsDrawer: React.FC<AdminLeadsDrawerProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'inquiries'), limit(50));
      const snapshot = await getDocs(q);
      const items: Inquiry[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Inquiry, 'id'>),
      }));
      // Sort newest first
      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setLeads(items);
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const handleUpdateStatus = async (inquiryId: string, newStatus: Inquiry['status']) => {
    try {
      await updateDoc(doc(db, 'inquiries', inquiryId), {
        status: newStatus,
      });
      setLeads((prev) =>
        prev.map((lead) => (lead.id === inquiryId ? { ...lead, status: newStatus } : lead))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Could not update status: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  if (!isOpen) return null;

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      lead.service.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl h-full bg-[#080c18] border-l border-purple-500/30 p-6 flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/50">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Client Leads & Inquiries</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                  {leads.length} Total
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Live Firestore Inquiries • Avinash Prasad Admin Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeads}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              title="Refresh Leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="py-4 space-y-3 border-b border-slate-800 text-xs">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or service..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {['all', 'new', 'contacted', 'in_progress', 'completed', 'archived'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider capitalize whitespace-nowrap transition-colors ${
                  filterStatus === st
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {st.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {loading ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              Loading client leads from Firestore...
            </div>
          ) : filteredLeads.length > 0 ? (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="glass-card p-5 rounded-xl border border-slate-800 hover:border-purple-500/40 space-y-3 transition-colors text-left"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      <span>{lead.name}</span>
                    </h4>
                    <span className="text-xs font-mono text-cyan-400">{lead.service}</span>
                  </div>

                  {/* Status Dropdown */}
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      lead.id && handleUpdateStatus(lead.id, e.target.value as Inquiry['status'])
                    }
                    className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none"
                  >
                    <option value="new">New Lead</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                  "{lead.details}"
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <div>
                    <span className="text-slate-500 block">Phone:</span>
                    <span className="text-slate-200 font-mono font-medium">{lead.phone}</span>
                  </div>
                  {lead.email && (
                    <div>
                      <span className="text-slate-500 block">Email:</span>
                      <span className="text-slate-200 truncate block">{lead.email}</span>
                    </div>
                  )}
                  {lead.budget && (
                    <div className="col-span-2">
                      <span className="text-slate-500 block">Tier / Budget:</span>
                      <span className="text-purple-300 font-medium">{lead.budget}</span>
                    </div>
                  )}
                </div>

                {/* Instant 1-Tap Communication Buttons */}
                <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Lead</span>
                  </a>
                  <a
                    href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hi ${lead.name}, this is Avinash Prasad. I received your inquiry regarding "${lead.service}". Let's discuss your website!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 text-xs sm:text-sm">
              No matching client leads found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
