// "use client";

// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const InboxSharingSettings = () => {
//   const [selectedSharing, setSelectedSharing] = useState('full');
  
//   const sharingOptions = [
//     {
//       id: 'metadata',
//       title: 'Metadata only',
//       description: 'Only subject lines will be visible to anyone on your workspace',
//       icon: (
//         <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
//           <div className="w-4 h-1 bg-zinc-600 rounded" />
//         </div>
//       )
//     },
//     {
//       id: 'subject',
//       title: 'Subject line and metadata',
//       description: "We'll share the subject, participants and timestamp with anyone in your workspace",
//       icon: (
//         <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
//           <div className="flex flex-col gap-1 w-4">
//             <div className="h-1 bg-zinc-600 rounded" />
//             <div className="h-1 bg-zinc-600 rounded" />
//           </div>
//         </div>
//       )
//     },
//     {
//       id: 'full',
//       title: 'Full access',
//       description: 'Everything is shared with your workspace members (including the body, subject line, attachments)',
//       badge: 'Plus',
//       icon: (
//         <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
//           <div className="flex flex-col gap-1 w-4">
//             <div className="h-1 bg-zinc-600 rounded" />
//             <div className="h-1 bg-zinc-600 rounded" />
//             <div className="h-1 bg-zinc-600 rounded" />
//           </div>
//         </div>
//       )
//     }
//   ];

//   const users = [
//     { id: 1, name: 'Jeremy Enderson', email: '', avatar: 'J', access: 'Full access' },
//     { id: 2, name: 'Nick Sharp', email: 'nick@attio.com', avatar: 'N', access: 'Full access' },
//     { id: 3, name: 'Alex Christie', email: 'alex@attio.com', avatar: 'A', access: 'Metadata only' }
//   ];

//   return (
//     <div className="w-full max-w-3xl mx-auto p-8 bg-zinc-900 rounded-lg shadow-lg">
//       {/* Header */}
//       <div className="mb-8">
//         <div className="flex items-center gap-4 mb-4">
//           <img src="/api/placeholder/24/24" alt="Google" className="w-6 h-6 rounded" />
//           <h1 className="text-xl font-semibold text-white">julian@attio.com</h1>
//           <span className="px-2 py-0.5 text-sm bg-zinc-800 text-emerald-400 rounded-full">In Sync</span>
//         </div>
//         <p className="text-zinc-400 text-sm">
//           Update your inbox permissions and settings. <a href="#" className="text-blue-400 hover:text-blue-300">Learn more</a>
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-6 border-b border-zinc-700 mb-8">
//         <button className="pb-4 text-blue-400 border-b-2 border-blue-400 font-medium">
//           General
//         </button>
//         <button className="pb-4 text-zinc-400 flex items-center gap-2">
//           Blocklist
//           <span className="bg-zinc-800 text-xs px-2 py-0.5 rounded-full">12</span>
//         </button>
//       </div>

//       {/* Sharing Configuration */}
//       <div className="mb-12">
//         <h2 className="text-lg font-semibold text-white mb-4">Default sharing configuration</h2>
//         <div className="space-y-2">
//           {sharingOptions.map((option) => (
//             <button
//               key={option.id}
//               onClick={() => setSelectedSharing(option.id)}
//               className={`w-full text-left p-4 rounded-lg flex items-start gap-4 transition-colors ${
//                 selectedSharing === option.id 
//                   ? 'bg-blue-500/10 border border-blue-500' 
//                   : 'border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/30'
//               }`}
//             >
//               {option.icon}
//               <div>
//                 <div className="flex items-center gap-2">
//                   <span className="font-medium text-white">{option.title}</span>
//                   {option.badge && (
//                     <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded-full font-medium">
//                       {option.badge}
//                     </span>
//                   )}
//                 </div>
//                 <p className="text-sm text-zinc-400 mt-1">{option.description}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Individual Sharing */}
//       <div>
//         <h2 className="text-lg font-semibold text-white mb-4">Individual inbox sharing</h2>
//         <div className="space-y-2">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               className="flex items-center justify-between p-4 border border-zinc-700 rounded-lg hover:border-zinc-600"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white font-medium">
//                   {user.avatar}
//                 </div>
//                 <div>
//                   <div className="font-medium text-white">{user.name}</div>
//                   {user.email && (
//                     <div className="text-sm text-zinc-400">{user.email}</div>
//                   )}
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <button className="text-zinc-400 flex items-center gap-1 hover:text-zinc-300">
//                   {user.access}
//                   <ChevronDown size={16} />
//                 </button>
//                 {user.id === 1 && (
//                   <button className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
//                     Share access
//                   </button>
//                 )}
//               </div>
//             </div>
 
"use client";
import './globals.css';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CiSettings } from "react-icons/ci";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

const InboxSharingSettings = () => {
  const [selectedSharing, setSelectedSharing] = useState('full');

  const sharingOptions = [
    {
      id: 'metadata',
      title: 'Metadata only',
      description: 'Only subject lines will be visible to anyone on your workspace',
      icon: (
        <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
          <div className="w-4 h-1 bg-zinc-600 rounded" />
        </div>
      )
    },
    {
      id: 'subject',
      title: 'Subject line and metadata',
      description: "We'll share the subject, participants, and timestamp with anyone in your workspace",
      icon: (
        <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
          <div className="flex flex-col gap-1 w-4">
            <div className="h-1 bg-zinc-600 rounded" />
            <div className="h-1 bg-zinc-600 rounded" />
          </div>
        </div>
      )
    },
    {
      id: 'full',
      title: 'Full access',
      description: 'Everything is shared with your workspace members (including the body, subject line, attachments)',
      badge: 'Plus',
      icon: (
        <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
          <div className="flex flex-col gap-1 w-4">
            <div className="h-1 bg-zinc-600 rounded" />
            <div className="h-1 bg-zinc-600 rounded" />
            <div className="h-1 bg-zinc-600 rounded" />
          </div>
        </div>
      )
    }
  ];

  const users = [
    { id: 1, name: 'Jeremy Enderson', email: '', avatar: 'J', access: 'Full access' },
    { id: 2, name: 'Nick Sharp', email: 'nick@attio.com', avatar: 'N', access: 'Full access' },
    { id: 3, name: 'Alex Christie', email: 'alex@attio.com', avatar: 'A', access: 'Metadata only' }
  ];

  return (
    <div className="p-8">
      <div className="text-sm text-gray-400 mb-4">
        <a href="#" className="hover:underline">Account</a> / <a href="#" className="hover:underline">Emails & Calendar</a> / <span>julian@attio.com</span>
      </div>
      <div className="flex items-center mb-6">
        <img src="/google-tile.svg" alt="Google logo" className="mr-4 w-10 h-10 rounded-xl"/>
        <div>
          <h1 className="text-2xl font-bold">julian@attio.com</h1>
          <p className="text-blue-500 hover:underline">Update your inbox permissions and settings. Learn more</p>
        </div>
        <div className="ml-auto bg-zinc-800 border border-zinc-700/50 rounded-xl px-3 py-1 flex items-center gap-1.5 ">
          <GrStatusGoodSmall className="text-green-500 w-3 h-3" />
          <span className="text-white">In Sync</span>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <CiSettings className='text-blue-500'/>
        <div className="text-blue-500 mr-4">General</div>
        <div className="text-gray-400 flex items-center">
          <MdOutlinePersonRemoveAlt1 className=''/>
          <i className="fas fa-user-slash mr-2"></i> Blocklist <span className="ml-1 bg-gray-600 text-white rounded-full px-2 py-1 text-xs">12</span>
        </div>
      </div>
      <div className="border-b border-gray-600 mb-6"></div>
      <h2 className="text-lg font-semibold mb-4">Default sharing configuration</h2>
      <div className="space-y-4 mb-6">
        {sharingOptions.map(option => (
          <div key={option.id} className={`flex items-center p-4 bg-gray-800 rounded-lg ${option.id === selectedSharing ? 'border border-blue-500' : ''}`}>
            {option.icon}
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{option.title} {option.badge && <span className="bg-yellow-500 text-black rounded-full px-2 py-1 text-xs ml-2">{option.badge}</span>}</h3>
              <p className="text-gray-400">{option.description}</p>
            </div>
            <input 
              type="radio" 
              name="sharing" 
              className="form-radio text-blue-500" 
              checked={option.id === selectedSharing} 
              onChange={() => setSelectedSharing(option.id)}
            />
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-4">Individual inbox sharing</h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mr-4">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">J</div>
          <span className="ml-2">Jeremy Enderson</span>
          <button className="ml-2 text-gray-400 hover:text-white"><i className="fas fa-times"></i></button>
        </div>
        <select className="bg-gray-800 text-white rounded-lg px-4 py-2 mr-4">
          <option>Full access</option>
          <option>Metadata only</option>
        </select>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Share access</button>
      </div>
      <div className="space-y-4">
        {users.slice(1).map(user => (
          <div key={user.id} className="flex items-center p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center mr-4">
              <div className={`bg-${user.avatar === 'N' ? 'purple' : 'yellow'}-500 text-white rounded-full w-8 h-8 flex items-center justify-center`}>{user.avatar}</div>
              <div className="ml-2">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>
            <select className="ml-auto bg-gray-800 text-white rounded-lg pl-4 pr-0 py-2">
  <option>Full access</option>
  <option>Metadata only</option>
</select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxSharingSettings;
