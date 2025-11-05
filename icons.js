function iconSearch(){return `<svg class="h-5 w-5 text-violet-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7" stroke-width="2"/><path d="m21 21-4.3-4.3" stroke-width="2"/></svg>`}
function iconClock(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" stroke-width="2"/><path d="M12 7v5l3 2" stroke-width="2"/></svg>`}
function iconCalendar(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke-width="2"/></svg>`}
function iconMail(){return `<svg class="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" stroke-width="2"/><path d="m3 7 9 6 9-6" stroke-width="2"/></svg>`}
function iconFolder(){return `<svg class="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h5l2 2h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke-width="2"/></svg>`}
function iconArrowLeft(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 18-6-6 6-6" stroke-width="2"/></svg>`}
function iconArrowRight(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 18 6-6-6-6" stroke-width="2"/></svg>`}
function iconShare(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5 15.4 17M15.4 7 8.6 10.5" stroke-width="2"/></svg>`}
function iconLink(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1" stroke-width="2"/></svg>`}
function formatDate(d){try{const dt=new Date(d);return dt.toLocaleDateString('vi-VN',{year:'numeric',month:'short',day:'2-digit'});}catch{return d}}

function iconSparkles(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l1.8 3.7 3.7 1.8-3.7 1.8L12 15l-1.8-3.7L6.5 8.5l3.7-1.8L12 3zM18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM5 14l.8 1.6L7.5 16 5.8 16.4 5 18 4.2 16.4 2.5 16l1.7-.4L5 14z"/></svg>`}
function iconTarget(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>`}
function iconChat(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" stroke-width="2"/></svg>`}
function iconRefresh(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v6h-6" stroke-width="2"/></svg>`}
function iconPuzzle(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 3h3a2 2 0 0 1 2 2v1h1a2 2 0 1 1 0 4h-1v2h1a2 2 0 1 1 0 4h-1v1a2 2 0 0 1-2 2H9v-1a2 2 0 1 0-4 0v1H4a2 2 0 0 1-2-2v-3h1a2 2 0 1 0 0-4H2V5a2 2 0 0 1 2-2h1v1a2 2 0 1 0 4 0z" stroke-width="2"/></svg>`}
function iconUsers(){return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M21 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" stroke-width="2"/></svg>`}


function iconShield(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke-width="2"/></svg>`}
function iconWallet(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="6" width="20" height="12" rx="2" stroke-width="2"/><path d="M16 12h4" stroke-width="2"/></svg>`}
function iconCard(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>`}
function iconBank(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10h18M5 10v8m4-8v8m4-8v8m4-8v8M3 18h18M2 10l10-6 10 6" stroke-width="2"/></svg>`}
function iconQr(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3M21 15v6h-6" stroke-width="2"/></svg>`}
function iconPercent(){return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 5 5 19" stroke-width="2"/><circle cx="7" cy="7" r="3" stroke-width="2"/><circle cx="17" cy="17" r="3" stroke-width="2"/></svg>`}
function iconSpinner(){return `<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity=".25" stroke-width="4" fill="none"/><path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="4" fill="none"/></svg>`}
