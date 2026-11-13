"use client";
import React from "react";

export default function GlassAnalyticsPage() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-zinc-950 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Glass Analytics</h1>
            <p className="text-sm text-slate-400">Real-time metrics rendered with frosted glassmorphic layers</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              Live Feed Active
            </span>
            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold transition-all">
              Export Report
            </button>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Revenue</span>
            <div className="text-3xl font-extrabold text-white">$128,430</div>
            <div className="text-xs text-emerald-400 font-medium">+14.2% from last month</div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Users</span>
            <div className="text-3xl font-extrabold text-white">24,850</div>
            <div className="text-xs text-emerald-400 font-medium">+8.1% growth rate</div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">System Latency</span>
            <div className="text-3xl font-extrabold text-white">24ms</div>
            <div className="text-xs text-blue-400 font-medium">Optimal performance</div>
          </div>
        </div>

        {/* Chart / Visual Section */}
        <div className="glass-panel p-8 rounded-3xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Performance Trajectory</h2>
            <div className="flex gap-2 text-xs">
              <button className="px-3 py-1 rounded-lg bg-white/20 font-semibold">Weekly</button>
              <button className="px-3 py-1 rounded-lg bg-white/5 text-slate-400">Monthly</button>
            </div>
          </div>

          {/* Simulated Glass Bar Chart */}
          <div className="h-48 flex items-end justify-between gap-4 pt-6 px-2">
            {[40, 65, 45, 85, 60, 95, 75, 90, 100, 80, 85, 95].map((height, i) => (
              <div key={i} className="w-full bg-white/5 rounded-t-xl h-full flex items-end relative group">
                <div
                  style={{ height: `${height}%` }}
                  className="w-full bg-gradient-to-t from-indigo-500/50 to-pink-500/60 rounded-t-xl backdrop-blur-sm transition-all duration-300 group-hover:from-indigo-400 group-hover:to-pink-400 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
