
window.onerror=function(msg,url,line,col,err){var d=document.createElement('div');d.style.cssText='position:fixed;bottom:0;left:0;right:0;background:#ef4444;color:#fff;padding:12px;font-size:13px;z-index:9999;font-family:monospace';d.textContent='JS Error: '+msg+' (line '+line+')';document.body.appendChild(d);setTimeout(function(){d.remove();},10000);};
/* ===== DEFAULT SECTIONS DATA ===== */
var defaultSections = [
  {name:'Office Area',desc:'Check all sub-zones: Bullpen, MDF Room, MMR (if applicable), Breakroom, Conference Rooms, Electrical Closet, Corridors, ACS/MaxCool panels, Fire Alarm Panel. Verify systems are free of unexpected alarms, doors are secured, and EPMS is operational.',cols:['Electrical Closet','ACS','MDF Room','EPMS','MMR (if appl.)','Load on Catcher 1','Load on Catcher 2','Conference Rooms','Breakroom','Office AC Panel','Corridors','MaxCool Panel','Office Area','Fire Alarm Panel'],type:'ok_issue',cheatSheet:'ACS panels: No alarms, setpoints normal | MaxCool: No alarms | EPMS: Online, no comm faults | Fire Alarm Panel: No active alarms, system normal | MDF Room: 60-85°F, <80% RH'},
  {name:'Medium Voltage Switchgear A and B',desc:'Check that all breakers are in normal alignment, FLoReS is in AUTO, relay status is good, and free of alarms. Check Controls UPS Voltage (110 Vdc - 140 Vdc). Verify no audible or visual alarms present.',cols:['Breaker Status','FLoReS','UPS','Audible/Visual'],type:'ok_issue',cheatSheet:'System voltage: 34.5 kV (live ~34,746 V) | All breakers: Normal alignment | FLoReS: AUTO | Controls UPS: 110-140 Vdc | Relay status: Good, no trip flags | No audible or visual alarms'},
  {name:'Generator Yard DH1',desc:'Gen in auto, no unexpected alarms. Check fuel, oil, and coolant levels. Verify battery charger and block heater. Check breaker status. Verify E-Stop is NOT pressed, ball valve is open, no leaks or debris. See Reference Values for specific ranges.',cols:['HSSB GEN','HSSB XFMR','GEN 1.1C','XMFR 1.1C','GEN 1.1A','XMFR 1.1A','GEN 1.1B','XMFR 1.1B','GEN 1.2A','XMFR 1.2A','GEN 1.2B','XMFR 1.2B','GEN 1.3A','XFMR 1.3A','GEN 1.3B','XFMR 1.3B','GEN 1.4A','XFMR 1.4A','GEN 1.4B','XFMR 1.4B','GEN 1.5A','XFMR 1.5A','GEN 1.5B','XFMR 1.5B','GEN 1.6A','XFMR 1.6A','GEN 1.6B','XFMR 1.6B'],type:'exp_unexp',cheatSheet:'Rating: 2750 kW, 480 VAC, 60 Hz | RPM: 1800 | Battery: 24 Vdc (24-28 Vdc with charger) | Oil pressure: 30-80 PSI (running) | Coolant temp: >100°F standby (block heater), 160-200°F running | Fuel level: >80% | E-Stop: NOT pressed | Ball valve: OPEN | XFMR winding: <105°C alarm, <120°C trip | XFMR liquid: <95°C | XFMR pressure: 0-7 PSI'},
  {name:'Diesel Fuel System',desc:'Check for leaks in fuel piping, tank, and pumps. Ensure pumps are in auto and free of alarms. Verify fuel level is above 80%. Inspect piping connections, valves, and containment area for signs of leakage or debris.',cols:['Piping','Tank','Pumps','Audible/Visual'],type:'exp_unexp',cheatSheet:'Fuel level: >80% | Pumps: AUTO, no alarms | Tank: 24-hr min capacity at 100% load | Piping: No leaks | Containment: No accumulation | Day tank: Normal level | Transfer pump: AUTO'},
  {name:'Generator Yard DH2',desc:'Gen in auto, no unexpected alarms. Check fuel, oil, and coolant levels. Verify battery charger and block heater. Check breaker status. Verify E-Stop is NOT pressed, ball valve is open, no leaks or debris. See Reference Values for specific ranges.',cols:['GEN 2.1C','XMFR 2.1C','GEN 2.6B','XFMR 2.6B','GEN 2.6A','XFMR 2.6A','GEN 2.5B','XFMR 2.5B','GEN 2.5A','XFMR 2.5A','GEN 2.4B','XFMR 2.4B','GEN 2.4A','XFMR 2.4A','GEN 2.3B','XFMR 2.3B','GEN 2.3A','XFMR 2.3A','GEN 2.2B','XMFR 2.2B','GEN 2.2A','XMFR 2.2A','GEN 2.1B','XMFR 2.1B','GEN 2.1A','XMFR 2.1A'],type:'exp_unexp',cheatSheet:'Rating: 2750 kW, 480 VAC, 60 Hz | RPM: 1800 | Battery: 24 Vdc (24-28 Vdc with charger) | Oil pressure: 30-80 PSI (running) | Coolant temp: >100°F standby (block heater), 160-200°F running | Fuel level: >80% | E-Stop: NOT pressed | Ball valve: OPEN | XFMR winding: <105°C alarm, <120°C trip | XFMR liquid: <95°C | XFMR pressure: 0-7 PSI'},
  {name:'Electrical Room 1.1-1.6',desc:'Check equipment in normal alignment, in AUTO, free of unexpected alarms. Standard ERs have 4 lineups: USB A, COP A, USB B, COP B. Check every USB, ATS, COP, CUPS/HUPS, DLB, AMCOP, BACOP, VESDA, ACS/MaxCool panel. Verify no audible or visual alarms.',cols:['HSSB','Lineup 1.1C','Lineup 1.1A','Lineup 1.1B','Lineup 1.2A','Lineup 1.2B','Lineup 1.3A','Lineup 1.3B','Lineup 1.4A','Lineup 1.4B','Lineup 1.5A','Lineup 1.5B','Lineup 1.6A','Lineup 1.6B'],type:'ok_issue',cheatSheet:'Room temp: 60-85°F normal (live 66-72°F), max 104°F failure | Humidity: <80% warning, >85% alarm (live 65-81%) | Room pressure: +0.01 IWC | All USBs: Normal alignment | ATS: AUTO, source available | COPs: Closed, no trip | CUPS/HUPS: Online, battery OK (68-77°F battery temp) | VESDA: No alarm | ACS/MaxCool: No alarms'},
  {name:'DAHU Gallery 1 (Odds)',desc:'All DAHUs in auto, no unexpected alarms, not leaking water. All VFDs in auto. VESDA not in alarm.',cols:['1.1-001','1.1-003','1.1-005','1.1-007','1.1-009','1.2-001','1.2-003','1.2-005','1.2-007','1.3-001','1.3-003','1.3-005','1.3-007','1.4-001','1.4-003','1.4-005','1.4-007','1.5-001','1.5-003','1.5-005','1.5-007','1.6-001','1.6-003','1.6-005','1.6-007'],type:'ok_issue',cheatSheet:'Supply air setpoint: 86-88°F (BOD nominal 85°F) | Cold aisle: WARNING >92°F, ALARM >95°F | Cold aisle low: WARNING <55°F, ALARM <50°F | Hot aisle max: 130°F | Server no-degrade limit: 104°F | Humidity: <80% RH | All DAHUs: AUTO, running | VFDs: AUTO, ~70% speed | VESDA: No alarm | DP setpoint: 0.01 IWC | Supply header: <0.30 IWC'},
  {name:'Electrical Room 2.1-2.6',desc:'Check equipment in normal alignment, in AUTO, free of unexpected alarms. Standard ERs have 4 lineups: USB A, COP A, USB B, COP B. Check every USB, ATS, COP, CUPS, AMCOP, BACOP, VESDA, ACS/MaxCool panel. Verify no audible or visual alarms.',cols:['Lineup 2.1C','Lineup 2.1A','Lineup 2.1B','Lineup 2.2A','Lineup 2.2B','Lineup 2.3A','Lineup 2.3B','Lineup 2.4A','Lineup 2.4B','Lineup 2.5A','Lineup 2.5B','Lineup 2.6A','Lineup 2.6B'],type:'ok_issue',cheatSheet:'Room temp: 60-85°F normal (live 66-72°F), max 104°F failure | Humidity: <80% warning, >85% alarm | Room pressure: +0.01 IWC | All USBs: Normal alignment | ATS: AUTO, source available | COPs: Closed, no trip | CUPS: Online, battery OK (68-77°F battery temp) | VESDA: No alarm | ACS/MaxCool: No alarms'},
  {name:'DAHU Gallery 2 (Odds)',desc:'All DAHUs in auto, no unexpected alarms, not leaking water. All VFDs in auto. VESDA not in alarm.',cols:['2.1-001','2.1-003','2.1-005','2.1-007','2.1-009','2.2-001','2.2-003','2.2-005','2.2-007','2.3-001','2.3-003','2.3-005','2.3-007','2.4-001','2.4-003','2.4-005','2.4-007','2.5-001','2.5-003','2.5-005','2.5-007','2.6-001','2.6-003','2.6-005','2.6-007'],type:'ok_issue',cheatSheet:'Supply air setpoint: 86-88°F (BOD nominal 85°F) | Cold aisle: WARNING >92°F, ALARM >95°F | Cold aisle low: WARNING <55°F, ALARM <50°F | Hot aisle max: 130°F | Humidity: <80% RH | All DAHUs: AUTO, running | VFDs: AUTO | VESDA: No alarm | DP setpoint: 0.01 IWC'},
  {name:'DAHU Gallery 1 (Evens)',desc:'All DAHUs in auto, no unexpected alarms, not leaking water. VESDA not in alarm.',cols:['1.1-002','1.1-004','1.1-006','1.1-008','1.1-010','1.2-002','1.2-004','1.2-006','1.2-008','1.3-002','1.3-004','1.3-006','1.3-008','1.4-002','1.4-004','1.4-006','1.4-008','1.5-002','1.5-004','1.5-006','1.5-008','1.6-002','1.6-004','1.6-006','1.6-008'],type:'ok_issue',cheatSheet:'Supply air setpoint: 86-88°F (BOD nominal 85°F) | Cold aisle: WARNING >92°F, ALARM >95°F | Cold aisle low: WARNING <55°F, ALARM <50°F | Hot aisle max: 130°F | Humidity: <80% RH | All DAHUs: AUTO, running | VFDs: AUTO | VESDA: No alarm | DP setpoint: 0.01 IWC'},
  {name:'DAHU Gallery 2 (Evens)',desc:'All DAHUs in auto, no unexpected alarms, not leaking water. All VFDs in auto. VESDA not in alarm.',cols:['2.1-002','2.1-004','2.1-006','2.1-008','2.1-010','2.2-002','2.2-004','2.2-006','2.2-008','2.3-002','2.3-004','2.3-006','2.3-008','2.4-002','2.4-004','2.4-006','2.4-008','2.5-002','2.5-004','2.5-006','2.5-008','2.6-002','2.6-004','2.6-006','2.6-008'],type:'ok_issue',cheatSheet:'Supply air setpoint: 86-88°F (BOD nominal 85°F) | Cold aisle: WARNING >92°F, ALARM >95°F | Cold aisle low: WARNING <55°F, ALARM <50°F | Hot aisle max: 130°F | Humidity: <80% RH | All DAHUs: AUTO, running | VFDs: AUTO | VESDA: No alarm | DP setpoint: 0.01 IWC'},
  {name:'Fire Riser Room',desc:'Verify all valves are in correct position, no leakages, no unexpected alarms on FCP. Check nitrogen generator, air compressor, and all zone pressures. See Reference Values for specific ranges.',cols:['Valves','Pressure','FACP','Nitrogen Gen'],type:'exp_unexp',cheatSheet:'Sprinkler heads: 175-200°F activation | Line pressure: 140-150 PSI (site-specific) | Nitrogen generator: 20-62 PSI | Air compressor: 120-175 PSI | Zone water pressure: 125-150 PSI | Zone air pressure: 15-25 PSI | All valves: Correct position per tag | FCP: No alarms | No leaks'},
  {name:'IW Room',desc:'Check all equipment is in auto and free of alarms. Inspect for leaks and debris. Verify pump skids, MIOX system, and IW tank levels. See Reference Values for specific ranges.',cols:['Pump Skid 1','Pump Skid 2','Miox Skid','Tanks'],type:'exp_unexp',cheatSheet:'Pump pressure setpoint: 47 PSI (live supply ~37 PSI) | Tank levels: ~80% normal | Tank low alarm: 70% | Tank overflow alarm: 102% | Source loss alarm: <20.3 PSI | Chlorine target: 2 ppm TCR | All pumps: AUTO, no alarms | No leaks or debris'},
  {name:'Roof',desc:'Inspect exhaust fans, RTUs, lightning protection grid, and lighting. Verify equipment functioning, no abnormal noise or leaks. See Reference Values for access requirements.',cols:['EFs','RTU','LPG','Lighting'],type:'ok_issue',cheatSheet:'Exhaust Fans: Running, no vibration, ~26-33% speed command | RTUs: Normal operation | Lightning protection: Intact | Lighting: Functional | Access: Mon-Fri only, clear weather, 2 personnel required'},
  {name:'Data Hall',desc:'Walk both data halls checking PDCs, racks, and hot aisle containment. Verify VESDA and MaxCool panels. See Reference Values for specific thresholds.',cols:['1.1 PDCs','1.1 Racks','1.1 HAC','1.2 PDCs','1.2 Racks','1.2 HAC','1.3 PDCs','1.3 Racks','1.3 HAC','1.4 PDCs','1.4 Racks','1.4 HAC','1.5 PDCs','1.5 Racks','1.5 HAC','1.6 PDCs','1.6 Racks','1.6 HAC','2.1 PDCs','2.1 Racks','2.1 HAC','2.2 PDCs','2.2 Racks','2.2 HAC','2.3 PDCs','2.3 Racks','2.3 HAC','2.4 PDCs','2.4 Racks','2.4 HAC','2.5 PDCs','2.5 Racks','2.5 HAC','2.6 PDCs','2.6 Racks','2.6 HAC'],type:'ok_issue',cheatSheet:'Cold aisle nominal: 85°F | Cold aisle WARNING high: >92°F | Cold aisle ALARM high: >95°F | Cold aisle WARNING low: <55°F | Server throttle: 104-113°F | Server shutdown: >113°F | Hot aisle max: 130°F | MaxCool Stage 1: 97°F trigger, 94°F reset | MaxCool pressure: +/-0.6 IWC | PDC: Both sources available | Catcher load: <4 Amps | VESDA: No alarm | Humidity: <80% RH | Escalation: 80-85°F supervisor, 85-90°F FM/CE, 90-95°F CM, 95°F+ Stage 2, 104°F+ corporate'}
];
var activeSections=defaultSections;

/* ===== ZONE MAP ===== */
var zoneMap = [
  {id:'office',label:'Office Area',sIdx:0,type:'office'},
  {id:'mv-swgr',label:'MV Switchgear A & B',sIdx:1,type:'electrical'},
  {id:'gen-dh1',label:'Gen Yard DH1',sIdx:2,type:'generator'},
  {id:'diesel',label:'Diesel Fuel System',sIdx:3,type:'generator'},
  {id:'er-1',label:'Electrical Room 1.1-1.6',sIdx:5,type:'electrical'},
  {id:'dahu-1-odds',label:'DAHU Gallery 1 (Odds)',sIdx:6,type:'dahu'},
  {id:'dahu-1-evens',label:'DAHU Gallery 1 (Evens)',sIdx:9,type:'dahu'},
  {id:'roof',label:'Roof',sIdx:13,type:'roof'},
  {id:'iw-room',label:'IW Room',sIdx:12,type:'fire'},
  {id:'fire-riser',label:'Fire Riser Room',sIdx:11,type:'fire'},
  {id:'dahu-2-evens',label:'DAHU Gallery 2 (Evens)',sIdx:10,type:'dahu'},
  {id:'dahu-2-odds',label:'DAHU Gallery 2 (Odds)',sIdx:8,type:'dahu'},
  {id:'er-2',label:'Electrical Room 2.1-2.6',sIdx:7,type:'electrical'},
  {id:'gen-dh2',label:'Gen Yard DH2',sIdx:4,type:'generator'},
  {id:'data-hall',label:'Data Hall',sIdx:14,type:'datahall'}
];

var zoneIcons={datahall:'&#9889;',dahu:'&#10052;',electrical:'&#9889;',generator:'&#9881;',office:'&#127970;',fire:'&#128167;',roof:'&#127748;'};
var zoneCardColors={'office':'zone-card-office','mv-swgr':'zone-card-mv','gen-dh1':'zone-card-gen','gen-dh2':'zone-card-gen','diesel':'zone-card-diesel','er-1':'zone-card-er','er-2':'zone-card-er','dahu-1-odds':'zone-card-dahu','dahu-1-evens':'zone-card-dahu','dahu-2-odds':'zone-card-dahu','dahu-2-evens':'zone-card-dahu','roof':'zone-card-roof','iw-room':'zone-card-iw','fire-riser':'zone-card-fireriser','data-hall':'zone-card-datahall'};
var sectionItemColors={0:'item-zone-office',1:'item-zone-mv',2:'item-zone-gen',3:'item-zone-diesel',4:'item-zone-gen',5:'item-zone-er',6:'item-zone-dahu',7:'item-zone-er',8:'item-zone-dahu',9:'item-zone-dahu',10:'item-zone-dahu',11:'item-zone-fireriser',12:'item-zone-iw',13:'item-zone-roof',14:'item-zone-datahall'};

/* ===== STATE ===== */
var currentSection=0;var roundData=null;var photoStore={};var db=null;
var buildingList=['SBN201','SBN202','SBN203','SBN204','SBN205','SBN206','SBN207','SBN208','SBN209'];
var cameraStream=null;var cameraSIdx=-1;var cameraIIdx=-1;var cameraFacing='environment';
var isEditing=false;var editKey=null;var zoneStatusCache={};var allFindings=[];var allHistory=[];
var activeBuilding='';var currentFilter='all';var noteEditState={};

/* ===== MVNR SITE DETECTION ===== */
function isMVNR(bldg){
  if(!bldg)return false;
  var num=parseInt(bldg.replace(/[^0-9]/g,''));
  return num>=200&&num<=209;
}
var mvnrNotes={
  'Medium Voltage Switchgear A and B':'MVNR: MV Loops 2 & 4 in MANUAL (auto restoration disabled) | MV Gear rated 71.6 MW, MVNR capacity 81 MW | Single utility loss: 6 lineups transfer to gen, EC2 racks load shed via BACOP',
  'Electrical Room 1.1-1.6':'MVNR: ATC/ATS in transfer inhibit (S2 racked out, LOTO, manual mode) — Phase 1&2 | USB MCBC breakers LOTO\'d (catcher used as primary) | BACOP Gen limits: Pre-caution 100%, Caution 100% | COP 1.1A/B priority for load shed (purple star) | AMCOP: Gen stabilization 5s, utility loss 10s | PDC breaker LTD: 36s (thermal memory disabled)',
  'Electrical Room 2.1-2.6':'MVNR: ATC/ATS in transfer inhibit (S2 racked out, LOTO, manual mode) — Phase 1&2 | USB MCBC breakers LOTO\'d (catcher used as primary) | BACOP Gen limits: Pre-caution 100%, Caution 100% | COP 2.1A/B priority for load shed (purple star) | AMCOP: Gen stabilization 5s, utility loss 10s | PDC breaker LTD: 36s (thermal memory disabled)',
  'Data Hall':'MVNR: Catcher load is NORMAL (not zero) — catcher used as primary lineups | Single-source racks: verify powered on correct source | NW racks stay N+C config | EPMS alarms disabled: Primary Source Available, FC14 (catcher load), FC12 (catcher threshold), FC01 (system not in normal), PDC/USB Catcher Active',
  'DAHU Gallery 1 (Odds)':'MVNR: DAHUs upgraded to 104,000 CFM | Supply fan max speed: 1,776 RPM | Filter DP high limit: 0.74 inWC | Exhaust fan max: 60 Hz',
  'DAHU Gallery 1 (Evens)':'MVNR: DAHUs upgraded to 104,000 CFM | Supply fan max speed: 1,776 RPM | Filter DP high limit: 0.74 inWC | Exhaust fan max: 60 Hz',
  'DAHU Gallery 2 (Odds)':'MVNR: DAHUs upgraded to 104,000 CFM | Supply fan max speed: 1,776 RPM | Filter DP high limit: 0.74 inWC | Exhaust fan max: 60 Hz',
  'DAHU Gallery 2 (Evens)':'MVNR: DAHUs upgraded to 104,000 CFM | Supply fan max speed: 1,776 RPM | Filter DP high limit: 0.74 inWC | Exhaust fan max: 60 Hz'
};

/* ===== FIREBASE ===== */
function initFirebase(){try{var app=firebase.initializeApp({apiKey:'AIzaSyBSbPq4wucgAha9yyccI0rVF8y6Zzw97Mw',authDomain:'budget-tracket-200b6.firebaseapp.com',databaseURL:'https://budget-tracket-200b6-default-rtdb.firebaseio.com',projectId:'budget-tracket-200b6',storageBucket:'budget-tracket-200b6.firebasestorage.app',messagingSenderId:'442984201568',appId:'1:442984201568:web:8203ec4ffbf1a05b283205'},'rounds');db=firebase.app('rounds').database();}catch(e){try{db=firebase.app('rounds').database();}catch(e2){}}}
/* ===== ROLE-BASED ACCESS CONTROL ===== */
var defaultRoles={
  superAdmins:['seschne'],
  admins:[
    'agisaleh','cliffbrd','cdover','fabricas','joshmx','kdancler','tjamora','wcpull','zspoljor',
    'froggi','jdleal','gpoulin','crjrich','darylise','raechc','eagenhay','tmuscato','juspnce'
  ]
};
var roles={superAdmins:[],admins:[]};
var currentUserRole='eot';

function loadRoles(){
  // Start with hardcoded defaults
  roles.superAdmins=defaultRoles.superAdmins.slice();
  roles.admins=defaultRoles.admins.slice();
  // Sync from Firebase if available
  if(db){
    db.ref('config/roles').once('value',function(snap){
      var val=snap.val();
      if(val){
        if(val.superAdmins&&Array.isArray(val.superAdmins))roles.superAdmins=val.superAdmins;
        if(val.admins&&Array.isArray(val.admins))roles.admins=val.admins;
      }else{
        // Seed Firebase with defaults
        db.ref('config/roles').set(defaultRoles);
      }
    });
  }
}

function getUserRole(alias){
  if(!alias)return 'eot';
  var a=alias.toLowerCase();
  for(var i=0;i<roles.superAdmins.length;i++){if(roles.superAdmins[i].toLowerCase()===a)return 'superAdmin';}
  for(var i=0;i<roles.admins.length;i++){if(roles.admins[i].toLowerCase()===a)return 'admin';}
  return 'eot';
}

function canDelete(alias){
  var role=getUserRole(alias);
  return role==='superAdmin'||role==='admin';
}

function canManageAdmins(alias){
  return getUserRole(alias)==='superAdmin';
}

function updateCurrentUserRole(){
  var alias=document.getElementById('techName')?document.getElementById('techName').value.trim():'';
  currentUserRole=getUserRole(alias);
  // Show/hide admin features
  var manageBtn=document.getElementById('btnManageAdmins');
  if(manageBtn)manageBtn.style.display=canManageAdmins(alias)?'block':'none';
}

function showAdminPanel(){
  var alias=document.getElementById('techName')?document.getElementById('techName').value.trim():'';
  if(!canManageAdmins(alias)){showToast('Super Admin access required');return;}
  showScreen('adminScreen');renderAdminPanel();
}

function renderAdminPanel(){
  var html='<div style="padding:16px">';
  html+='<h2 style="color:var(--accent);margin-bottom:16px">\u2699\uFE0F Admin Management</h2>';
  html+='<div style="font-size:12px;color:var(--muted);margin-bottom:16px">Super Admins can add or remove Admin access (CEs/FMs who can delete rounds).</div>';
  
  // Super Admins list (read-only display)
  html+='<div style="margin-bottom:20px"><div style="font-size:14px;font-weight:700;color:var(--amber);margin-bottom:8px">\uD83D\uDD11 Super Admins</div>';
  for(var i=0;i<roles.superAdmins.length;i++){
    html+='<div style="background:var(--card);border:1px solid var(--amber);border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:6px;font-size:14px;color:var(--amber)">'+escHtml(roles.superAdmins[i])+'</div>';
  }
  html+='</div>';
  
  // Admins list (editable)
  html+='<div style="margin-bottom:20px"><div style="font-size:14px;font-weight:700;color:var(--green);margin-bottom:8px">\uD83D\uDEE1\uFE0F Admins (CEs & FMs) \u2014 '+roles.admins.length+' total</div>';
  for(var i=0;i<roles.admins.length;i++){
    html+='<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:6px;display:flex;align-items:center;justify-content:space-between">';
    html+='<span style="font-size:14px">'+escHtml(roles.admins[i])+'</span>';
    html+='<button style="background:rgba(239,68,68,0.15);color:var(--red);border:1px solid rgba(239,68,68,0.3);border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer" onclick="removeAdmin('+i+')">Remove</button>';
    html+='</div>';
  }
  html+='</div>';
  
  // Add new admin
  html+='<div style="margin-bottom:20px">';
  html+='<div style="font-size:14px;font-weight:700;margin-bottom:8px">Add Admin</div>';
  html+='<div style="display:flex;gap:8px">';
  html+='<input type="text" id="newAdminAlias" style="flex:1;padding:12px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text);font-size:15px" placeholder="Enter alias...">';
  html+='<button style="padding:12px 20px;background:var(--accent);color:#000;border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap" onclick="addAdmin()">Add</button>';
  html+='</div></div>';
  
  // Back button
  html+='<button style="width:100%;padding:16px;background:var(--card);color:var(--text);border:1px solid var(--border);border-radius:var(--radius);font-size:15px;font-weight:600;cursor:pointer" onclick="showScreen(\'startScreen\');loadRecentRounds();">\u2190 Back to Home</button>';
  html+='</div>';
  
  document.getElementById('adminContent').innerHTML=html;
}

function addAdmin(){
  var input=document.getElementById('newAdminAlias');
  if(!input||!input.value.trim()){showToast('Enter an alias');return;}
  var alias=input.value.trim().toLowerCase();
  // Check if already exists
  for(var i=0;i<roles.admins.length;i++){if(roles.admins[i].toLowerCase()===alias){showToast(alias+' is already an admin');return;}}
  for(var i=0;i<roles.superAdmins.length;i++){if(roles.superAdmins[i].toLowerCase()===alias){showToast(alias+' is a Super Admin');return;}}
  roles.admins.push(alias);
  if(db)db.ref('config/roles/admins').set(roles.admins);
  showToast(alias+' added as Admin');
  renderAdminPanel();
}

function removeAdmin(idx){
  var alias=roles.admins[idx];
  if(!confirm('Remove '+alias+' from Admin access?'))return;
  roles.admins.splice(idx,1);
  if(db)db.ref('config/roles/admins').set(roles.admins);
  showToast(alias+' removed from Admin');
  renderAdminPanel();
}

/* ===== AUTO-SAVE IN-PROGRESS ROUNDS ===== */
function autoSaveRound(){
  if(!roundData||!db||!activeBuilding)return;
  if(roundData.status!=='in_progress')return;
  roundData.lastModified=Date.now();roundData.currentSection=currentSection;
  var key='rounds/'+activeBuilding+'/'+roundData.date+'/'+roundData.startTime;
  if(isEditing&&editKey)key=editKey;
  try{db.ref(key).set(roundData);}catch(e){}
}
function pauseRound(){
  if(!roundData)return;
  autoSaveRound();
  showToast('Round paused — saved to recent rounds');
  resetApp();
}
function saveToFirebase(data,key){
  if(!db){queueOfflineWrite('set',key,data);return;}
  try{db.ref(key).set(data).catch(function(){queueOfflineWrite('set',key,data);});}catch(e){queueOfflineWrite('set',key,data);}
}
function deleteFromFirebase(key){
  if(!db){queueOfflineWrite('delete',key,null);return;}
  try{db.ref(key).remove().catch(function(){queueOfflineWrite('delete',key,null);});}catch(e){queueOfflineWrite('delete',key,null);}
}
function queueOfflineWrite(action,key,data){
  try{var queue=JSON.parse(localStorage.getItem('sbn-rounds-offline-queue')||'[]');
  queue.push({action:action,key:key,data:data,timestamp:Date.now()});
  localStorage.setItem('sbn-rounds-offline-queue',JSON.stringify(queue));
  updateOfflineBadge();showToast('Saved offline — will sync when connected');}catch(e){}
}
function syncOfflineQueue(){
  if(!db)return;
  try{var queue=JSON.parse(localStorage.getItem('sbn-rounds-offline-queue')||'[]');
  if(queue.length===0)return;var synced=0;
  queue.forEach(function(item){try{if(item.action==='set')db.ref(item.key).set(item.data);else if(item.action==='delete')db.ref(item.key).remove();synced++;}catch(e){}});
  localStorage.setItem('sbn-rounds-offline-queue','[]');updateOfflineBadge();
  if(synced>0)showToast(synced+' offline write'+(synced>1?'s':'')+' synced!');}catch(e){}
}
function updateOfflineBadge(){
  try{var queue=JSON.parse(localStorage.getItem('sbn-rounds-offline-queue')||'[]');
  var badge=document.getElementById('offlineBadge');
  if(badge){if(queue.length>0){badge.textContent=queue.length+' queued';badge.style.display='inline-block';}else{badge.style.display='none';}}}catch(e){}
}

/* ===== HELPERS ===== */
function escHtml(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function showToast(msg){var t=document.getElementById('toast');t.textContent=msg;t.style.display='block';setTimeout(function(){t.style.display='none';},3000);}
function showScreen(id){var screens=document.querySelectorAll('.screen');for(var i=0;i<screens.length;i++)screens[i].classList.remove('active');document.getElementById(id).classList.add('active');}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function timeAgo(ts){if(!ts)return'Never';var diff=Date.now()-ts;var hrs=Math.floor(diff/3600000);if(hrs<1)return Math.floor(diff/60000)+'m ago';if(hrs<24)return hrs+'h ago';return Math.floor(hrs/24)+'d ago';}
function formatDateTime(ts){if(!ts)return'N/A';var d=new Date(ts);return d.toLocaleDateString()+' '+d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});}

/* ===== DASHBOARD ===== */
function toggleDashboard(){var h=document.getElementById('dashHeader');h.classList.toggle('collapsed');}

/* ===== NAV ===== */
function switchMainTab(tabId,btn){
  var panes=document.querySelectorAll('#mainScreen .tab-pane');
  for(var i=0;i<panes.length;i++){panes[i].style.display='none';panes[i].classList.remove('active');}
  var tabMap={zones:'tabZones',walk:'tabWalk',findings:'tabFindings',history:'tabHistory',compliance:'tabCompliance'};
  var pane=document.getElementById(tabMap[tabId]);
  if(pane){pane.style.display=tabId==='walk'?'flex':'block';pane.classList.add('active');}
  var tabs=document.querySelectorAll('.drawer-btn');for(var j=0;j<tabs.length;j++)tabs[j].classList.remove('active');
  if(btn)btn.classList.add('active');
  else{var all=document.querySelectorAll('.drawer-btn');for(var k=0;k<all.length;k++){if(all[k].getAttribute('data-tab')===tabId)all[k].classList.add('active');}}
  if(tabId==='walk'&&roundData)renderWalkthrough(); else exitCompactWalk();
  if(tabId==='findings')renderFindings();
  if(tabId==='history')renderHistory();
  if(tabId==='zones'){renderZoneList();updateDashboardMetrics();}
  if(tabId==='compliance')renderCompliance();
}

/* ===== FILTER ===== */
function setFilter(f,btn){
  currentFilter=f;
  var chips=document.querySelectorAll('.filter-chip');for(var i=0;i<chips.length;i++)chips[i].classList.remove('active');
  if(btn)btn.classList.add('active');
  renderZoneList();
}

/* ===== START SCREEN ===== */
function initStartScreen(){
  var buildings=buildingList;
  var grid=document.getElementById('buildingGrid');var html='';
  for(var i=0;i<buildings.length;i++)html+='<button class="building-btn" data-bldg="'+buildings[i]+'">'+buildings[i]+'</button>';
  grid.innerHTML=html;
  var btns=grid.querySelectorAll('.building-btn');
  for(var j=0;j<btns.length;j++)btns[j].addEventListener('click',function(){var all=grid.querySelectorAll('.building-btn');for(var k=0;k<all.length;k++)all[k].classList.remove('selected');this.classList.add('selected');checkReady();if(db)loadRecentRounds(this.getAttribute('data-bldg'));});
  var sg=document.getElementById('shiftGrid');
  sg.innerHTML='<button class="shift-btn" data-shift="Days">Days</button><button class="shift-btn" data-shift="Nights">Nights</button>';
  var sb=sg.querySelectorAll('.shift-btn');
  for(var m=0;m<sb.length;m++)sb[m].addEventListener('click',function(){var all=sg.querySelectorAll('.shift-btn');for(var n=0;n<all.length;n++)all[n].classList.remove('selected');this.classList.add('selected');checkReady();});
  document.getElementById('techName').addEventListener('input',function(){this.value=this.value.toLowerCase();checkReady();updateCurrentUserRole();});
  document.getElementById('roundDate').value=todayStr();
}
function getSelectedBuilding(){var s=document.querySelector('.building-btn.selected');return s?s.getAttribute('data-bldg'):'';}
function getSelectedShift(){var s=document.querySelector('.shift-btn.selected');return s?s.getAttribute('data-shift'):'';}
function checkReady(){var ok=getSelectedBuilding()&&document.getElementById('techName').value.trim()&&getSelectedShift();var btn=document.getElementById('btnBegin');btn.style.opacity=ok?'1':'0.5';}

function beginRounds(){
  try{
  if(roundData&&roundData.status==='in_progress'){if(!confirm('You have a round in progress for '+roundData.building+'. Start a new one? (Current round will be saved as in-progress)'))return;}
  var btn=document.getElementById('btnBegin');
  var selectedBldg=getSelectedBuilding();
  if(!selectedBldg){btn.textContent='\u26A0 SELECT A BUILDING';btn.style.background='var(--red)';setTimeout(function(){btn.textContent='BEGIN ROUNDS';btn.style.background='';},2000);return;}
  if(!document.getElementById('techName').value.trim()){btn.textContent='\u26A0 ENTER YOUR ALIAS';btn.style.background='var(--red)';setTimeout(function(){btn.textContent='BEGIN ROUNDS';btn.style.background='';},2000);return;}
  if(!getSelectedShift()){btn.textContent='\u26A0 SELECT A SHIFT';btn.style.background='var(--red)';setTimeout(function(){btn.textContent='BEGIN ROUNDS';btn.style.background='';},2000);return;}
  currentSection=0;photoStore={};noteEditState={};
  btn.textContent='LOADING...';btn.style.background='var(--amber)';btn.style.color='#000';
  var loaded=false;
  if(db){
    var timeout=setTimeout(function(){if(!loaded){loaded=true;activeSections=defaultSections;btn.textContent='BEGIN ROUNDS';btn.style.background='';btn.style.color='';startRoundsWithSections(selectedBldg);}},4000);
    db.ref('config/sections/'+selectedBldg).once('value',function(snap){
      if(loaded)return;loaded=true;clearTimeout(timeout);
      try{var val=snap.val();
      if(val&&Array.isArray(val)&&val.length>0){
        // Always use code defaults — they are the source of truth
        activeSections=defaultSections;
        // Update Firebase with latest defaults
        db.ref('config/sections/'+selectedBldg).set(defaultSections);
      }
      else{activeSections=defaultSections;db.ref('config/sections/'+selectedBldg).set(defaultSections);}
      }catch(e){activeSections=defaultSections;}
      btn.textContent='BEGIN ROUNDS';btn.style.background='';btn.style.color='';startRoundsWithSections(selectedBldg);
    },function(){if(loaded)return;loaded=true;clearTimeout(timeout);activeSections=defaultSections;btn.textContent='BEGIN ROUNDS';btn.style.background='';btn.style.color='';startRoundsWithSections(selectedBldg);});
  }else{activeSections=defaultSections;btn.textContent='BEGIN ROUNDS';btn.style.background='';btn.style.color='';startRoundsWithSections(selectedBldg);}
  }catch(err){document.getElementById('btnBegin').textContent='ERROR: '+err.message;document.getElementById('btnBegin').style.background='var(--red)';}
}

function startRoundsWithSections(selectedBldg){
  try{
  var secs=[];
  for(var i=0;i<activeSections.length;i++){
    var items=[];var secCols=activeSections[i].cols||[];for(var j=0;j<secCols.length;j++)items.push({name:secCols[j],status:'',note:'',photos:0,noteLocked:false});
    secs.push({name:activeSections[i].name,status:'pending',allOk:false,completedBy:'',completedAt:'',notes:'',items:items});
  }
  roundData={building:selectedBldg,technician:document.getElementById('techName').value.trim(),shift:getSelectedShift(),date:document.getElementById('roundDate').value||todayStr(),ticketUrl:document.getElementById('ticketUrl').value.trim(),startTime:Date.now(),endTime:null,status:'in_progress',sections:secs,lastModified:Date.now()};
  activeBuilding=roundData.building;
  document.getElementById('headerSub').textContent=activeBuilding+' — '+roundData.shift+' — '+roundData.technician;if(isMVNR(activeBuilding)){document.getElementById('headerSub').textContent+=' [MVNR]';}
  showScreen('mainScreen');loadZoneStatuses();loadFindingsFromFirebase();loadHistoryFromFirebase();loadHandoffNotes();updateSimBanner();
  switchMainTab('zones');
  }catch(e){alert('startRounds error: '+e.message);showScreen('startScreen');}
}

/* ===== SIM TICKET ===== */
function normalizeSimTicket(raw){if(!raw)return'';raw=raw.trim();var urlMatch=raw.match(/t\.corp\.amazon\.com\/(?:issues\/)?(?:SIM-?)?(\d+)/i);if(urlMatch)return urlMatch[1];var simMatch=raw.match(/^SIM-?(\d+)$/i);if(simMatch)return simMatch[1];var ttMatch=raw.match(/^tt\/(\d+)$/i);if(ttMatch)return ttMatch[1];if(/^\d{6,}$/.test(raw))return raw;return raw;}
function getSimUrl(t){if(!t)return'';return'https://t.corp.amazon.com/'+normalizeSimTicket(t);}
function openSimTicket(){if(roundData&&roundData.ticketUrl)window.open(getSimUrl(roundData.ticketUrl),'_blank');}
function updateSimBanner(){var b=document.getElementById('simBanner'),t=document.getElementById('simBannerText');if(roundData&&roundData.ticketUrl){t.textContent='SIM-'+normalizeSimTicket(roundData.ticketUrl);b.style.display='block';}else{b.style.display='none';}}
function tryClipboardAutoFill(){var field=document.getElementById('ticketUrl');if(!field||field.value.trim())return;try{navigator.clipboard.readText().then(function(text){if(!text)return;var p=/(?:t\.corp\.amazon\.com\/(?:issues\/)?(?:SIM-?)?\d+|^SIM-?\d+$|^tt\/\d+$)/im;if(p.test(text.trim())){field.value=text.trim();document.getElementById('clipboardHint').style.display='block';showToast('SIM ticket detected from clipboard');}}).catch(function(){});}catch(e){}}

/* ===== ZONE LIST (replaces floor plan grid) ===== */
function getZoneStatusInfo(sIdx){
  var status=zoneStatusCache[sIdx];
  var currentSec=roundData?roundData.sections[sIdx]:null;
  var walked=false,hasIssue=false,overdue=false,lastWalked=null,lastTech='';
  if(currentSec&&currentSec.status==='complete'){
    walked=true;lastWalked=currentSec.completedAt;lastTech=currentSec.completedBy||'';
    for(var i=0;i<currentSec.items.length;i++){if(currentSec.items[i].status==='issue'||currentSec.items[i].status==='unexpected')hasIssue=true;}
  }
  if(status&&status.lastWalked){
    if(!lastWalked||status.lastWalked>lastWalked){lastWalked=status.lastWalked;lastTech=status.technician||'';}
    if(status.hasFindings)hasIssue=true;
  }
  if(lastWalked&&(Date.now()-lastWalked)>86400000)overdue=true;
  if(!lastWalked)overdue=true;
  if(walked)overdue=false;
  return{walked:walked,hasIssue:hasIssue,overdue:overdue,lastWalked:lastWalked,lastTech:lastTech};
}

function renderZoneList(){
  var list=document.getElementById('zoneList');var html='';
  for(var i=0;i<zoneMap.length;i++){
    var z=zoneMap[i];var sec=activeSections[z.sIdx];if(!sec)continue;var info=getZoneStatusInfo(z.sIdx);
    // Filter
    if(currentFilter==='walked'&&!info.walked)continue;
    if(currentFilter==='overdue'&&!info.overdue)continue;
    if(currentFilter==='findings'&&!info.hasIssue)continue;
    var statusCls=info.hasIssue?'has-findings':info.walked?'walked':info.overdue?'overdue':'';
    var badgeHtml='';
    if(info.hasIssue)badgeHtml='<span class="zone-status-badge badge-findings">Issues</span>';
    else if(info.walked)badgeHtml='<span class="zone-status-badge badge-walked">Walked</span>';
    else if(info.overdue)badgeHtml='<span class="zone-status-badge badge-overdue">Overdue</span>';
    else badgeHtml='<span class="zone-status-badge badge-pending">Pending</span>';
    var icon=zoneIcons[z.type]||'&#128204;';
    var colorCls=zoneCardColors[z.id]||'';
    html+='<div class="zone-card '+statusCls+' '+colorCls+'" id="zcard-'+i+'" onclick="toggleZoneCard('+i+')">';
    html+='<div class="zone-card-top">';
    html+='<div class="zone-icon zone-icon-'+z.type+'">'+icon+'</div>';
    html+='<div class="zone-info"><div class="zone-name">'+escHtml(z.label)+'</div>';
    html+='<div class="zone-meta">'+sec.cols.length+' items'+(sec.type==='notes_only'?' (notes only)':'')+' &middot; Last: '+(info.lastWalked?timeAgo(info.lastWalked):'Never')+'</div></div>';
    html+=badgeHtml+'</div>';
    // Expandable detail
    html+='<div class="zone-detail"><div class="zone-detail-inner">';
    html+='<div class="zone-detail-row"><span class="label">Description</span></div>';
    html+='<div style="font-size:13px;color:var(--muted);margin-bottom:8px;line-height:1.5">'+escHtml(sec.desc)+'</div>';
    if(info.lastTech)html+='<div class="zone-detail-row"><span class="label">Last By</span><span>'+escHtml(info.lastTech)+'</span></div>';
    // Zone findings
    var zoneFindings=allFindings.filter(function(f){return f.sectionIdx===z.sIdx&&f.status==='open';});
    if(zoneFindings.length>0){
      html+='<div class="zone-detail-findings"><div style="font-size:12px;font-weight:600;color:var(--red);margin-bottom:4px">Open Findings ('+zoneFindings.length+')</div>';
      zoneFindings.forEach(function(f){html+='<div class="zone-finding-item"><strong>'+escHtml(f.item)+'</strong><br>'+escHtml(f.note)+'</div>';});
      html+='</div>';
    }
    if(roundData)html+='<button class="btn-walk" onclick="event.stopPropagation();startWalkFromZone('+z.sIdx+')">Start Walk &#8594;</button>';
    html+='</div></div></div>';
  }
  if(!html)html='<div style="text-align:center;padding:40px;color:var(--muted)">No zones match filter</div>';
  list.innerHTML=html;
}

function toggleZoneCard(idx){
  var card=document.getElementById('zcard-'+idx);
  if(card)card.classList.toggle('expanded');
}

function startWalkFromZone(sIdx){currentSection=sIdx;switchMainTab('walk');}

/* ===== DASHBOARD METRICS ===== */
function updateDashboardMetrics(){
  var openF=allFindings.filter(function(f){return f.status==='open';}).length;
  var zonesW=0,overdue=0;
  if(roundData){for(var i=0;i<roundData.sections.length;i++){if(roundData.sections[i].status==='complete')zonesW++;}}
  for(var j=0;j<activeSections.length;j++){
    var ts=null;
    if(roundData&&roundData.sections[j]&&roundData.sections[j].completedAt)ts=roundData.sections[j].completedAt;
    var st=zoneStatusCache[j];if(st&&st.lastWalked&&(!ts||st.lastWalked>ts))ts=st.lastWalked;
    if(!ts||(Date.now()-ts)>86400000)overdue++;
  }
  document.getElementById('mOpenFindings').textContent=openF;
  document.getElementById('mZonesWalked').textContent=zonesW+'/'+activeSections.length;
  document.getElementById('mOverdue').textContent=overdue;
  document.getElementById('mTotalWalks').textContent=allHistory.length;
}

/* ===== ZONE STATUS LOADING ===== */
function loadZoneStatuses(){
  if(!db||!activeBuilding)return;zoneStatusCache={};
  var today=new Date();var pending=0;
  for(var d=0;d<7;d++){var dt=new Date(today);dt.setDate(dt.getDate()-d);
    var ds=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');
    pending++;(function(dateStr){db.ref('rounds/'+activeBuilding+'/'+dateStr).once('value',function(snap){
      var val=snap.val();if(val){var keys=Object.keys(val);for(var k=0;k<keys.length;k++){var r=val[keys[k]];if(r.sections){for(var s=0;s<r.sections.length;s++){var sec=r.sections[s];if(sec.completedAt){var ex=zoneStatusCache[s];if(!ex||sec.completedAt>ex.lastWalked){var hasF=false;if(sec.items)sec.items.forEach(function(it){if(it.status==='issue'||it.status==='unexpected')hasF=true;});zoneStatusCache[s]={lastWalked:sec.completedAt,technician:sec.completedBy||r.technician||'',hasFindings:hasF};}}}}}}
      pending--;if(pending===0){renderZoneList();updateDashboardMetrics();}
    },function(){pending--;if(pending===0){renderZoneList();updateDashboardMetrics();}});})(ds);}
}

/* ===== FINDINGS SYSTEM ===== */
function loadFindingsFromFirebase(){
  if(!db||!activeBuilding)return;allFindings=[];
  db.ref('findings/'+activeBuilding).once('value',function(snap){
    var val=snap.val();if(val){var keys=Object.keys(val);for(var i=0;i<keys.length;i++){var f=val[keys[i]];f._key=keys[i];allFindings.push(f);}}
    allFindings.sort(function(a,b){return(b.timestamp||0)-(a.timestamp||0);});renderFindings();updateDashboardMetrics();
  });
}

function saveFindingsFromRound(rd,fbKey){
  if(!db)return;
  rd.sections.forEach(function(sec,sIdx){sec.items.forEach(function(item){
    if(item.status==='issue'||item.status==='unexpected'){
      var fKey='findings/'+rd.building+'/'+Date.now()+'_'+sIdx+'_'+Math.random().toString(36).substr(2,4);
      saveToFirebase({zone:sec.name,item:item.name,note:item.note||'',photos:item.photos||0,date:rd.date,technician:rd.technician,timestamp:Date.now(),status:'open',sectionIdx:sIdx,roundKey:fbKey},fKey);
    }
  });});
}

function renderFindings(){
  var open=allFindings.filter(function(f){return f.status==='open';});
  var resolved=allFindings.filter(function(f){return f.status==='resolved';});
  document.getElementById('findingsCount').textContent=open.length||'';
  document.getElementById('findingsCountFull').textContent=open.length+' open';
  if(allFindings.length===0){document.getElementById('findingsList').innerHTML='<div class="finding-empty">&#9989; No findings recorded yet</div>';return;}
  var html='';
  open.forEach(function(f){
    html+='<div class="finding-card"><div class="finding-zone">'+escHtml(f.zone)+'</div>';
    html+='<div class="finding-item">'+escHtml(f.item)+'</div>';
    if(f.note)html+='<div class="finding-note">'+escHtml(f.note)+'</div>';
    html+='<div class="finding-meta"><span>'+escHtml(f.technician)+' &bull; '+escHtml(f.date)+(f.photos?' &bull; '+f.photos+' photo(s)':'')+'</span>';
    html+='<button class="finding-resolve" onclick="resolveFinding(\''+escHtml(f._key)+'\')">&#9989; Resolve</button></div></div>';
  });
  if(resolved.length>0){
    html+='<div style="padding:12px 0 4px;font-size:12px;color:var(--muted);font-weight:600">RESOLVED ('+resolved.length+')</div>';
    resolved.slice(0,10).forEach(function(f){
      html+='<div class="finding-card resolved"><div class="finding-zone">'+escHtml(f.zone)+'</div>';
      html+='<div class="finding-item">'+escHtml(f.item)+'</div>';
      html+='<div class="finding-meta"><span>'+escHtml(f.technician)+' &bull; '+escHtml(f.date)+'</span><span style="color:var(--green)">Resolved</span></div></div>';
    });
  }
  document.getElementById('findingsList').innerHTML=html;
}

function resolveFinding(key){
  if(!db||!activeBuilding)return;
  db.ref('findings/'+activeBuilding+'/'+key+'/status').set('resolved');
  for(var i=0;i<allFindings.length;i++){if(allFindings[i]._key===key)allFindings[i].status='resolved';}
  renderFindings();updateDashboardMetrics();renderZoneList();showToast('Finding resolved');
}

/* ===== HISTORY ===== */
function loadHistoryFromFirebase(){
  if(!db||!activeBuilding)return;allHistory=[];var today=new Date();var pending=0;
  for(var d=0;d<30;d++){var dt=new Date(today);dt.setDate(dt.getDate()-d);
    var ds=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');
    pending++;(function(dateStr){db.ref('rounds/'+activeBuilding+'/'+dateStr).once('value',function(snap){
      var val=snap.val();if(val){var keys=Object.keys(val);for(var k=0;k<keys.length;k++){var r=val[keys[k]];r._fbKey='rounds/'+activeBuilding+'/'+dateStr+'/'+keys[k];allHistory.push(r);}}
      pending--;if(pending===0){allHistory.sort(function(a,b){return(b.startTime||0)-(a.startTime||0);});renderHistory();updateDashboardMetrics();}
    },function(){pending--;if(pending===0){allHistory.sort(function(a,b){return(b.startTime||0)-(a.startTime||0);});renderHistory();updateDashboardMetrics();}});})(ds);}
}

function renderHistory(){
  if(allHistory.length===0){document.getElementById('historyList').innerHTML='<div class="history-empty">No walk history found for '+activeBuilding+'</div>';return;}
  var html='';
  allHistory.forEach(function(r){
    var totalItems=0,okCount=0,issueCount=0;
    if(r.sections)r.sections.forEach(function(s){if(s.items)s.items.forEach(function(it){totalItems++;if(it.status==='ok'||it.status==='expected')okCount++;if(it.status==='issue'||it.status==='unexpected')issueCount++;});});
    var pct=totalItems>0?Math.round(okCount/totalItems*100):0;
    var statusBadge=r.status==='completed'?'<span style="color:var(--green)">Complete</span>':'<span style="color:var(--accent)">In Progress</span>';
    html+='<div class="history-card" onclick="this.classList.toggle(\'expanded\')">';
    html+='<div class="h-top"><span class="h-bldg">'+(r.building||activeBuilding)+'</span><span class="h-date">'+(r.date||'')+'</span></div>';
    html+='<div class="h-meta">'+(r.technician||'')+' &bull; '+(r.shift||'')+' &bull; '+statusBadge+'</div>';
    html+='<div class="h-stats"><div class="h-stat" style="color:var(--green)">&#9989; '+okCount+'</div><div class="h-stat" style="color:var(--red)">&#9888; '+issueCount+'</div><div class="h-stat">'+pct+'% OK</div></div>';
    html+='<div class="h-detail">';
    if(r.sections)r.sections.forEach(function(s){
      var si=0;if(s.items)s.items.forEach(function(it){if(it.status==='issue'||it.status==='unexpected')si++;});
      html+='<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px"><span>'+s.name+'</span>'+(si>0?'<span style="color:var(--red)">'+si+' issue'+(si>1?'s':'')+'</span>':'<span style="color:var(--green)">OK</span>')+'</div>';
    });
    html+='</div></div>';
  });
  document.getElementById('historyList').innerHTML=html;
}

/* ===== WALKTHROUGH ===== */
function renderWalkthrough(){
  if(!roundData)return;
  var sec=activeSections[currentSection];var secData=roundData.sections[currentSection];
  document.getElementById('walkTitle').textContent=sec.name;
  document.getElementById('walkDesc').textContent=sec.cheatSheet?'':sec.desc;
  // Vertical stepper
  var sHtml='';
  for(var p=0;p<activeSections.length;p++){
    var cls='step-dot';
    if(p===currentSection)cls+=' active';
    else if(roundData.sections[p].status==='complete'){
      cls+=' completed';
      for(var q=0;q<roundData.sections[p].items.length;q++){if(roundData.sections[p].items[q].status==='issue'||roundData.sections[p].items[q].status==='unexpected'){cls=cls.replace('completed','has-issue');break;}}
    }
    sHtml+='<div class="'+cls+'" onclick="jumpToSection('+p+')">'+(p+1)+'</div>';
    if(p<activeSections.length-1)sHtml+='<div class="step-connector'+(roundData.sections[p].status==='complete'?' completed':'')+'"></div>';
  }
  document.getElementById('walkStepper').innerHTML=sHtml;
  // Cheat sheet
  var html='';
  if(sec.cheatSheet){
    html+='<div class="cheat-sheet-toggle" onclick="this.classList.toggle(\'open\')"><span class="cheat-sheet-arrow">&#9654;</span> Reference Values \u0026 Description</div>';
    html+='<div class="cheat-sheet-content"><div class="cheat-sheet-content-inner">';
    html+='<div style="margin-bottom:8px;color:var(--text)">'+escHtml(sec.desc)+'</div>';
    html+='<div style="border-top:1px solid var(--border);padding-top:8px;margin-top:4px">';
    var vals=sec.cheatSheet.split(' | ');
    for(var v=0;v<vals.length;v++)html+='<div><strong>'+escHtml(vals[v].split(':')[0])+':</strong>'+escHtml(vals[v].split(':').slice(1).join(':'))+'</div>';
        if(isMVNR(activeBuilding)&&mvnrNotes[sec.name]){
      html+='<div style="border-top:1px solid var(--amber);padding-top:8px;margin-top:8px">';
      html+='<div style="color:var(--amber);font-weight:700;font-size:12px;margin-bottom:4px">\u26A0 MVNR Site Values</div>';
      var mvals=mvnrNotes[sec.name].split(' | ');
      for(var mv=0;mv<mvals.length;mv++)html+='<div><strong>'+escHtml(mvals[mv].split(':')[0])+':</strong>'+escHtml(mvals[mv].split(':').slice(1).join(':'))+'</div>';
      html+='</div>';
    }
html+='</div></div></div>';
  }
  // Walk content
  if(sec.type==='notes_only'){
    html+=renderMultiNotes(currentSection,sec.name);
  } else {
    var okLabel=sec.type==='exp_unexp'?'Expected':'OK';
    var issueLabel=sec.type==='exp_unexp'?'Unexpected':'Issue';
    
    // Show tap hint for non-touch users
    if(!('ontouchstart' in window)){html+='<div style="background:rgba(6,182,212,0.1);border:1px solid var(--accent);border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:10px;font-size:12px;color:var(--accent);text-align:center"><strong>Desktop Mode:</strong> Click items to cycle OK \u2192 Issue \u2192 Clear</div>';}
html+='<div class="item-list">';
    var sCols=sec.cols||[];for(var idx=0;idx<sCols.length;idx++){
      var item=secData.items[idx];var statusCls='';var statusText='';
      if(item.status==='ok'||item.status==='expected'){statusCls='status-ok';statusText=okLabel;}
      else if(item.status==='issue'||item.status==='unexpected'){statusCls='status-issue';statusText=issueLabel;}
      var lineupCls='';var itemName=sec.cols[idx];
      if(/\d+\.\d+A$/.test(itemName))lineupCls='item-lineup-a';
      else if(/\d+\.\d+B$/.test(itemName))lineupCls='item-lineup-b';
      else if(/\d+\.\d+C$/.test(itemName))lineupCls='item-lineup-c';
      else if(/HSSB/.test(itemName))lineupCls='item-zone-hssb';
      else if(sectionItemColors[currentSection])lineupCls=sectionItemColors[currentSection];
      html+='<div class="item-card '+lineupCls+'" id="card-'+idx+'">';
      html+='<div class="swipe-bg swipe-bg-ok">&#10003; '+okLabel+'</div>';
      html+='<div class="swipe-bg swipe-bg-issue">'+issueLabel+' &#10007;</div>';
      html+='<div class="item-content"><div class="item-name"><span>'+escHtml(sCols[idx])+'</span>';
      if(statusText)html+='<span class="status-badge '+statusCls+'">'+statusText+'</span>';
      html+='</div></div>';
      if(item.status==='issue'||item.status==='unexpected'){
        var noteKey=currentSection+'-'+idx;
        var locked=item.noteLocked||false;
        html+='<div class="issue-detail">';
        if(locked){
          html+='<div class="issue-note-locked">'+escHtml(item.note||'No note')+'</div>';
          html+='<div class="issue-actions">';
          html+='<button class="issue-btn btn-edit-note" onclick="unlockNote('+currentSection+','+idx+')">&#9998; Edit</button>';
        } else {
          html+='<textarea class="issue-note" id="note-'+currentSection+'-'+idx+'" inputmode="text" placeholder="Describe the issue..." oninput="updateItemNote('+currentSection+','+idx+',this.value)">'+escHtml(item.note||'')+'</textarea>';
          html+='<div class="issue-actions">';
          html+='<button class="issue-btn btn-done" onclick="lockNote('+currentSection+','+idx+')">&#9989; Done</button>';
        }
        var photoKey=currentSection+'-'+idx;var photos=photoStore[photoKey]||[];
        if(photos.length<3)html+='<button class="issue-btn photo-btn" onclick="openCamera('+currentSection+','+idx+')">&#128247; Photo</button>';
        html+='<input type="file" id="fileInp-'+currentSection+'-'+idx+'" class="file-input-hidden" accept="image/*" onchange="handlePhoto(this,'+currentSection+','+idx+')">';
        html+='</div>';
        if(photos.length>0){
          html+='<div class="photo-thumbs">';
          for(var pi=0;pi<photos.length;pi++)html+='<div class="photo-thumb-wrap"><img class="photo-thumb" src="'+photos[pi]+'" onclick="previewPhoto(\''+photoKey+'\','+pi+')"><button class="photo-remove" onclick="removePhoto(\''+photoKey+'\','+pi+')">x</button></div>';
          html+='</div>';
        }
        html+='</div>';
      }
      html+='</div>';
    }
    html+='</div>';
    // Remaining OK/Expected button at bottom (KC suggestion)
    var remaining=0;var sItems=secData.items||[];for(var ri=0;ri<sItems.length;ri++){if(!sItems[ri].status)remaining++;}
    if(remaining>0)html+='<button class="btn-remaining" onclick="markRemainingOk()">REMAINING '+okLabel.toUpperCase()+' ('+remaining+') &#9989;</button>';
    // Multi-note section notes
    html+=renderMultiNotes(currentSection,sec.name);
  }
  document.getElementById('walkContent').innerHTML=html;
  if(sec.type!=='notes_only')for(var si=0;si<sCols.length;si++)attachSwipe(document.getElementById('card-'+si),currentSection,si,sec.type);
  // Auto-compact on scroll down (KC feedback: more screen space)
  var wc=document.getElementById('walkContent');
  if(wc&&!wc._compactBound){wc._compactBound=true;wc.addEventListener('scroll',function(){if(wc.scrollTop>40)enterCompactWalk();},{passive:true});}
  updateNavButtons();updateMiniHeader();
}
/* ===== NOTE LOCK/UNLOCK ===== */
function lockNote(sIdx,iIdx){roundData.sections[sIdx].items[iIdx].noteLocked=true;renderWalkthrough();autoSaveRound();}
function unlockNote(sIdx,iIdx){roundData.sections[sIdx].items[iIdx].noteLocked=false;renderWalkthrough();}

/* ===== JUMP TO SECTION ===== */
function jumpToSection(idx){currentSection=idx;renderWalkthrough();document.getElementById('walkContent').scrollTop=0;}

/* ===== SWIPE ===== */
function attachSwipe(card,sIdx,iIdx,type){
  if(!card)return;var startX=0,startY=0,swiping=false,scrolling=false;
  var content=card.querySelector('.item-content');
  card.addEventListener('touchstart',function(e){var t=e.touches[0];startX=t.clientX;startY=t.clientY;swiping=false;scrolling=false;content.style.transition='none';},{passive:true});
  card.addEventListener('touchmove',function(e){
    if(scrolling)return;var t=e.touches[0];var dx=t.clientX-startX;var dy=t.clientY-startY;
    if(!swiping&&Math.abs(dy)>Math.abs(dx)){scrolling=true;return;}swiping=true;enterCompactWalk();
    var okBg=card.querySelector('.swipe-bg-ok');var issueBg=card.querySelector('.swipe-bg-issue');
    if(dx>10){okBg.style.display='flex';issueBg.style.display='none';}
    else if(dx<-10){issueBg.style.display='flex';okBg.style.display='none';}
    else{okBg.style.display='none';issueBg.style.display='none';}
    content.style.transform='translateX('+dx+'px)';
  },{passive:true});
  card.addEventListener('touchend',function(e){
    if(scrolling)return;var t=e.changedTouches[0];var dx=t.clientX-startX;
    content.style.transition='transform 0.2s ease';
    if(dx>80)markItem(sIdx,iIdx,type==='exp_unexp'?'expected':'ok');
    else if(dx<-80)markItem(sIdx,iIdx,type==='exp_unexp'?'unexpected':'issue');
    content.style.transform='translateX(0)';
    card.querySelector('.swipe-bg-ok').style.display='none';
    card.querySelector('.swipe-bg-issue').style.display='none';
  });
  card.addEventListener('click',function(e){if(swiping)return;if(e.target.closest('.issue-detail')||e.target.tagName==='TEXTAREA'||e.target.tagName==='BUTTON'||e.target.tagName==='INPUT')return;var item=roundData.sections[sIdx].items[iIdx];var okSt=type==='exp_unexp'?'expected':'ok';var issueSt=type==='exp_unexp'?'unexpected':'issue';if(!item.status){item.status=okSt;}else if(item.status===okSt){item.status=issueSt;}else{item.status='';item.note='';item.noteLocked=false;}checkSectionComplete(sIdx);renderWalkthrough();});
}

function markItem(sIdx,iIdx,status){roundData.sections[sIdx].items[iIdx].status=status;roundData.sections[sIdx].items[iIdx].noteLocked=false;checkSectionComplete(sIdx);renderWalkthrough();autoSaveRound();}
function markAllOk(){
  var sec=activeSections[currentSection];var secData=roundData.sections[currentSection];
  var okStatus=sec.type==='exp_unexp'?'expected':'ok';
  for(var i=0;i<secData.items.length;i++){secData.items[i].status=okStatus;secData.items[i].noteLocked=false;}
  secData.allOk=true;secData.status='complete';secData.completedBy=roundData.technician;secData.completedAt=Date.now();
  if(currentSection<activeSections.length-1)currentSection++;
  renderWalkthrough();renderZoneList();updateDashboardMetrics();var wc=document.getElementById('walkContent');if(wc)wc.scrollTop=0;autoSaveRound();
}
function updateItemNote(sIdx,iIdx,val){roundData.sections[sIdx].items[iIdx].note=val;updateNavButtons();}

function updateSectionNotes(sIdx,val){/* legacy - kept for compat */}
function renderMultiNotes(sIdx,secName){
  var secData=roundData.sections[sIdx];
  // Migrate legacy string notes to array
  if(typeof secData.notes==='string'&&secData.notes.trim()){secData.notesList=[secData.notes.trim()];secData.notes='';}
  if(!secData.notesList)secData.notesList=[];
  var html='<div class="section-notes"><label>Section Notes</label>';
  html+='<div class="note-entry-area">';
  html+='<textarea id="noteInput-'+sIdx+'" inputmode="text" placeholder="Add a note..."></textarea>';
  html+='<button class="note-submit-btn" onclick="submitSectionNote('+sIdx+')">Submit</button>';
  html+='</div>';
  if(secData.notesList.length>0){
    html+='<div class="saved-notes-list">';
    for(var n=0;n<secData.notesList.length;n++){
      html+='<div class="saved-note-item"><span class="saved-note-text">'+escHtml(secData.notesList[n])+'</span>';
      html+='<button class="saved-note-del" onclick="deleteSectionNote('+sIdx+','+n+')">&#10005;</button></div>';
    }
    html+='</div>';
  }
  html+='</div>';
  return html;
}
function submitSectionNote(sIdx){
  var inp=document.getElementById('noteInput-'+sIdx);if(!inp)return;
  var text=inp.value.trim();if(!text)return;
  var secData=roundData.sections[sIdx];
  if(!secData.notesList)secData.notesList=[];
  secData.notesList.push(text);
  // Also store as joined string for backward compat with export
  secData.notes=secData.notesList.join('\n---\n');
  inp.value='';renderWalkthrough();showToast('Note saved');autoSaveRound();
}
function deleteSectionNote(sIdx,nIdx){
  var secData=roundData.sections[sIdx];
  if(secData.notesList)secData.notesList.splice(nIdx,1);
  secData.notes=secData.notesList?secData.notesList.join('\n---\n'):'';
  renderWalkthrough();
}
function markRemainingOk(){
  var sec=activeSections[currentSection];var secData=roundData.sections[currentSection];
  var okStatus=sec.type==='exp_unexp'?'expected':'ok';
  for(var i=0;i<secData.items.length;i++){if(!secData.items[i].status)secData.items[i].status=okStatus;}
  checkSectionComplete(currentSection);
  if(currentSection<activeSections.length-1)currentSection++;
  renderWalkthrough();renderZoneList();updateDashboardMetrics();var wc=document.getElementById('walkContent');if(wc)wc.scrollTop=0;autoSaveRound();
}
function checkSectionComplete(sIdx){
  var secData=roundData.sections[sIdx];var allDone=true,allOk=true;
  for(var i=0;i<secData.items.length;i++){if(!secData.items[i].status)allDone=false;if(secData.items[i].status==='issue'||secData.items[i].status==='unexpected')allOk=false;}
  if(allDone||activeSections[sIdx].type==='notes_only'){secData.status='complete';secData.allOk=allOk;secData.completedBy=roundData.technician;secData.completedAt=Date.now();}
  renderZoneList();updateDashboardMetrics();  autoSaveRound();

}
function updateNavButtons(){
  var secData=roundData.sections[currentSection];
  document.getElementById('btnPrev').disabled=currentSection===0;
  var allMarked=true,allNotesOk=true;
  for(var i=0;i<secData.items.length;i++){if(!secData.items[i].status)allMarked=false;if((secData.items[i].status==='issue'||secData.items[i].status==='unexpected')&&!secData.items[i].note)allNotesOk=false;}
  var sec=activeSections[currentSection];var canAdv=sec.type==='notes_only'||(allMarked&&allNotesOk);
  var btn=document.getElementById('btnNext');btn.disabled=!canAdv;
  btn.textContent=currentSection===activeSections.length-1?'Review Summary':'Next \u2192';
}
/* ===== COMPACT WALK MODE ===== */
var walkCompact=false;
function enterCompactWalk(){
  if(walkCompact)return;walkCompact=true;
  document.getElementById('mainScreen').classList.add('walk-compact');
  var sec=activeSections[currentSection];
  document.getElementById('miniWalkTitle').textContent=sec?sec.name:'Walk';
  var done=0;for(var i=0;i<activeSections.length;i++){if(roundData.sections[i].status==='complete')done++;}
  document.getElementById('miniWalkProgress').textContent=done+'/'+activeSections.length+' zones';
}
function exitCompactWalk(){
  walkCompact=false;
  document.getElementById('mainScreen').classList.remove('walk-compact');
}
function updateMiniHeader(){
  if(!walkCompact||!roundData)return;
  var sec=activeSections[currentSection];
  document.getElementById('miniWalkTitle').textContent=sec?sec.name:'Walk';
  var done=0;for(var i=0;i<activeSections.length;i++){if(roundData.sections[i].status==='complete')done++;}
  document.getElementById('miniWalkProgress').textContent=done+'/'+activeSections.length+' zones';
}
function prevSection(){if(currentSection>0){currentSection--;renderWalkthrough();}}
function nextSection(){
  if(currentSection<activeSections.length-1){checkSectionComplete(currentSection);currentSection++;renderWalkthrough();document.getElementById('walkContent').scrollTop=0;}
  else{checkSectionComplete(currentSection);showSummary();}
}

/* ===== PHOTOS ===== */
function openCamera(sIdx,iIdx){
  cameraSIdx=sIdx;cameraIIdx=iIdx;cameraFacing='environment';
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    document.getElementById('cameraModal').classList.add('active');
    startCameraStream().catch(function(){document.getElementById('cameraModal').classList.remove('active');var inp=document.getElementById('fileInp-'+sIdx+'-'+iIdx);if(inp)inp.click();});
  }else{var inp=document.getElementById('fileInp-'+sIdx+'-'+iIdx);if(inp)inp.click();}
}
function startCameraStream(){
  if(cameraStream){cameraStream.getTracks().forEach(function(t){t.stop();});cameraStream=null;}
  return navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:cameraFacing},width:{ideal:1280},height:{ideal:720}}})
  .catch(function(){return navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:cameraFacing},width:{ideal:1280},height:{ideal:720}}});})
  .then(function(stream){cameraStream=stream;var v=document.getElementById('cameraVideo');v.srcObject=stream;v.onloadedmetadata=function(){v.play();};return stream;});
}
function handlePhoto(input,sIdx,iIdx){
  var file=input.files[0];if(!file)return;var reader=new FileReader();
  reader.onload=function(e){var img=new Image();img.onload=function(){
    var canvas=document.createElement('canvas');var maxW=800;var w=img.width,h=img.height;
    if(w>maxW){h=Math.round(h*(maxW/w));w=maxW;}canvas.width=w;canvas.height=h;
    canvas.getContext('2d').drawImage(img,0,0,w,h);var comp=canvas.toDataURL('image/jpeg',0.8);
    var key=sIdx+'-'+iIdx;if(!photoStore[key])photoStore[key]=[];
    if(photoStore[key].length<3){photoStore[key].push(comp);roundData.sections[sIdx].items[iIdx].photos=photoStore[key].length;renderWalkthrough();}
  };img.src=e.target.result;};reader.readAsDataURL(file);
}
function previewPhoto(key,idx){var photos=photoStore[key];if(photos&&photos[idx]){document.getElementById('photoPreviewImg').src=photos[idx];document.getElementById('photoPreviewModal').style.display='flex';}}
function removePhoto(key,idx){if(photoStore[key]){photoStore[key].splice(idx,1);var parts=key.split('-');roundData.sections[parseInt(parts[0])].items[parseInt(parts[1])].photos=photoStore[key].length;renderWalkthrough();}}

/* ===== SUMMARY ===== */
function showSummary(){
  showScreen('summaryScreen');
  var totalItems=0,okCount=0,issueCount=0,photoCount=0;
  var html='<div style="padding:4px"><h2 style="color:var(--accent);margin-bottom:16px;font-size:20px">Round Summary</h2>';
  html+='<div class="summary-stats">';
  roundData.sections.forEach(function(sec){sec.items.forEach(function(item){totalItems++;if(item.status==='ok'||item.status==='expected')okCount++;if(item.status==='issue'||item.status==='unexpected')issueCount++;photoCount+=(item.photos||0);});});
  html+='<div class="stat-card"><div class="stat-val" style="color:var(--green)">'+okCount+'</div><div class="stat-lbl">OK</div></div>';
  html+='<div class="stat-card"><div class="stat-val" style="color:var(--red)">'+issueCount+'</div><div class="stat-lbl">Issues</div></div>';
  html+='<div class="stat-card"><div class="stat-val">'+totalItems+'</div><div class="stat-lbl">Total</div></div>';
  html+='<div class="stat-card"><div class="stat-val">'+photoCount+'</div><div class="stat-lbl">Photos</div></div></div>';
  roundData.sections.forEach(function(sec,sIdx){
    var si=0;sec.items.forEach(function(it){if(it.status==='issue'||it.status==='unexpected')si++;});
    var icon=si>0?'<span style="color:var(--red)">&#9888;&#65039; '+si+'</span>':'<span style="color:var(--green)">&#9989;</span>';
    html+='<div class="summary-card" onclick="this.classList.toggle(\'expanded\')">';
    html+='<div class="sec-name"><span>'+sec.name+'</span>'+icon+'</div>';
    html+='<div class="sec-details">';
    if(sec.completedBy)html+='<div style="font-size:12px;color:var(--muted)">Completed by '+sec.completedBy+'</div>';
    sec.items.forEach(function(it){if(it.status==='issue'||it.status==='unexpected')html+='<div style="color:var(--red);margin-top:4px">&bull; '+it.name+': '+(it.note||'No note')+'</div>';});
    if(sec.notes)html+='<div style="color:var(--muted);margin-top:4px;font-style:italic">Notes: '+sec.notes+'</div>';
    html+='</div></div>';
  });
  
  // Show edit trail if exists
  if(roundData.editLog&&roundData.editLog.length>0){
    html+='<div style="margin-top:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px">';
    html+='<div style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:8px">\uD83D\uDCDD Edit Trail</div>';
    for(var el=0;el<roundData.editLog.length;el++){
      var entry=roundData.editLog[el];
      var ts=entry.timestamp?new Date(entry.timestamp).toLocaleString():'';
      html+='<div style="font-size:12px;color:var(--muted);padding:3px 0"><strong>'+escHtml(entry.alias||'Unknown')+'</strong> \u2014 '+escHtml(entry.action||'')+' \u2014 <span style="opacity:0.7">'+ts+'</span></div>';
    }
    html+='</div>';
  }
  html+='<button class="btn-submit" onclick="submitRounds()">SUBMIT ROUNDS</button>';
  html+='<button style="width:100%;padding:16px;background:var(--card);color:var(--text);border:1px solid var(--border);border-radius:var(--radius);font-size:15px;font-weight:600;cursor:pointer;margin-top:10px;min-height:56px" onclick="showScreen(\'mainScreen\');switchMainTab(\'walk\')">&#8592; Back to Walkthrough</button></div>';
  document.getElementById('summaryContent').innerHTML=html;
}

/* ===== SUBMIT ===== */
function submitRounds(){
  try{
  for(var di=0;di<roundData.sections.length;di++){var ds=roundData.sections[di];if(!ds){alert('ERROR: Section '+di+' undefined');return;}}
  roundData.endTime=Date.now();roundData.status='completed';roundData.lastModified=Date.now();
  var excelHtml=generateExcel();
  var baseName=roundData.building+'_Rounds_'+roundData.date+'_'+roundData.technician.replace(/[^a-zA-Z0-9]/g,'');
  var hasPhotos=false;var keys=Object.keys(photoStore);for(var i=0;i<keys.length;i++){if(photoStore[keys[i]].length>0){hasPhotos=true;break;}}
  if(hasPhotos&&typeof JSZip!=='undefined'){
    var zip=new JSZip();zip.file(baseName+'.xls',excelHtml);
    var folder=zip.folder('photos');
    keys.forEach(function(key){photoStore[key].forEach(function(dataUrl,pi){
      var parts=key.split('-');var secObj=activeSections[parseInt(parts[0])];
      var secName=secObj?secObj.name.replace(/[^a-zA-Z0-9]/g,'_').substring(0,15):'Section';
      var itemName=(secObj&&secObj.cols[parseInt(parts[1])])?secObj.cols[parseInt(parts[1])].replace(/[^a-zA-Z0-9]/g,'_').substring(0,15):'item';
      var b64=dataUrl.split(',')[1];folder.file(secName+'_'+itemName+'_'+(pi+1)+'.jpg',b64,{base64:true});
    });});
    zip.generateAsync({type:'blob'}).then(function(blob){handleSubmitFile(blob,baseName+'.zip','application/zip');});
  }else{var blob=new Blob([excelHtml],{type:'application/vnd.ms-excel'});handleSubmitFile(blob,baseName+'.xls','application/vnd.ms-excel');}
  }catch(err){alert('Submit error: '+err.message);}
}
function downloadBlob(blob,fn){var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download=fn;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);}
function handleSubmitFile(blob,filename,mimeType){
  var fbKey='rounds/'+roundData.building+'/'+roundData.date+'/'+Date.now();
  if(isEditing&&editKey)fbKey=editKey;
  // Log the save action in edit trail
  if(isEditing&&roundData.editLog){roundData.editLog.push({alias:roundData.lastEditedBy||roundData.technician,timestamp:Date.now(),action:'saved changes'});}
  saveToFirebase(roundData,fbKey);saveFindingsFromRound(roundData,fbKey);
  // Save report for shareable link
  var reportKey=roundData.building+'_'+roundData.date+'_'+Date.now();
  var excelForReport=generateExcel();
  saveToFirebase({html:excelForReport,building:roundData.building,date:roundData.date,technician:roundData.technician,shift:roundData.shift,created:Date.now()}, 'reports/'+reportKey);
  lastReportKey=reportKey;lastReportName=roundData.building+'_Rounds_'+roundData.date+'_'+roundData.technician.replace(/[^a-zA-Z0-9]/g,'');
  lastSubmitBlob=blob;lastSubmitFilename=filename;lastSubmitMime=mimeType;
  var totalItems=0,okCount=0,issueCount=0;
  roundData.sections.forEach(function(sec){sec.items.forEach(function(item){if(!item)return;totalItems++;if(item.status==='ok'||item.status==='expected')okCount++;if(item.status==='issue'||item.status==='unexpected')issueCount++;});});
  lastSubmitSummary=roundData.building+' Daily Rounds\nDate: '+roundData.date+'\nAlias: '+roundData.technician+'\nShift: '+roundData.shift+'\n\nSummary: '+okCount+'/'+totalItems+' OK, '+issueCount+' issues';
  if(issueCount>0){lastSubmitSummary+='\n\nISSUES:\n';roundData.sections.forEach(function(sec){sec.items.forEach(function(item){if(item&&(item.status==='issue'||item.status==='unexpected'))lastSubmitSummary+='- '+sec.name+' > '+(item.name||'Unknown')+': '+(item.note||'')+'\n';});});}
  var canShareFiles=false;
  try{var testFile=new File([blob],filename,{type:mimeType});canShareFiles=navigator.canShare&&navigator.canShare({files:[testFile]});}catch(e){}
  var canShareText=!!navigator.share;
  showScreen('doneScreen');exitCompactWalk();
  var shareBtn=document.getElementById('btnShareFile');var dlBtn=document.getElementById('btnDownloadFile');var msg=document.getElementById('doneMsg');
  if(canShareFiles){shareBtn.style.display='block';shareBtn.textContent='\uD83D\uDCE4 Share Round Report';dlBtn.style.display='block';msg.innerHTML='Your round data has been saved!<br>Tap Share to send the report.';showToast('Rounds submitted!');}
  else if(canShareText){shareBtn.style.display='block';shareBtn.textContent='\uD83D\uDCE4 Share Summary';dlBtn.style.display='block';downloadBlob(blob,filename);msg.innerHTML='Your round data has been saved!<br>File downloaded. Tap Share to send a summary.';showToast('File downloaded!');}
  else{shareBtn.style.display='none';dlBtn.style.display='block';downloadBlob(blob,filename);
    var ticketUrl=roundData.ticketUrl;if(ticketUrl){if(!/^https?:\/\//.test(ticketUrl)){ticketUrl=ticketUrl.replace(/^tt\//,'');ticketUrl='https://t.corp.amazon.com/'+ticketUrl;}window.open(ticketUrl,'_blank');}
    msg.innerHTML='Your round data has been saved!<br>File downloaded — attach to your SIM ticket.';showToast('File downloaded!');}
}

/* ===== EXCEL EXPORT ===== */
function shareFile(){
  var btn=document.getElementById('btnShareFile');
  if(!roundData||!lastReportKey){if(btn)btn.textContent='No report available';return;}
  if(btn){btn.textContent='Sharing...';btn.style.opacity='0.7';}
  var reportUrl='https://jeffreyswick8.github.io/sbn-daily-rounds/report.html?key='+encodeURIComponent(lastReportKey)+'&name='+encodeURIComponent(lastReportName);
  var shareText=lastSubmitSummary?lastSubmitSummary:'';
  shareText+='\n\nDownload Report:\n'+reportUrl;
  if(navigator.share){
    navigator.share({title:roundData.building+' Daily Rounds',text:shareText,url:reportUrl}).then(function(){
      if(btn){btn.textContent='\u2705 Shared!';btn.style.opacity='1';}
    }).catch(function(e){
      if(btn){btn.textContent='\uD83D\uDCE4 Share Round Report';btn.style.opacity='1';}
    });
  }else{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(shareText).then(function(){
        showToast('Report link copied to clipboard!');
        if(btn){btn.textContent='\u2705 Link Copied!';btn.style.opacity='1';}
      }).catch(function(){if(btn){btn.textContent='Share';btn.style.opacity='1';}});
    }
  }
}

function shareToSlack(){
  var btn=document.getElementById('btnShareSlack');
  var text=lastSubmitSummary||'Daily Rounds Report';
  // Copy to clipboard
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      if(btn)btn.textContent='\u2705 Copied! Opening Slack...';
      showToast('Summary copied — paste into your Slack channel');
      setTimeout(function(){window.open('slack://open','_blank');},500);
    }).catch(function(){
      fallbackCopy(text);
      if(btn)btn.textContent='\u2705 Copied! Opening Slack...';
      setTimeout(function(){window.open('slack://open','_blank');},500);
    });
  }else{
    fallbackCopy(text);
    if(btn)btn.textContent='\u2705 Copied! Opening Slack...';
    setTimeout(function(){window.open('slack://open','_blank');},500);
  }
}
function shareToEmail(){
  var subject=encodeURIComponent(roundData.building+' Daily Rounds - '+roundData.date);
  var body=encodeURIComponent((lastSubmitSummary||'Daily Rounds Report')+'\n\n(Report file attached separately)');
  window.location.href='mailto:?subject='+subject+'&body='+body;
}


function copySummaryToClipboard(){
  var text=lastSubmitSummary||'No summary available';
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){showToast('Summary copied! Paste into Slack or email.');}).catch(function(){fallbackCopy(text);});
  }else{fallbackCopy(text);}
}
function fallbackCopy(text){
  var ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;left:-9999px';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');showToast('Summary copied!');}catch(e){showToast('Could not copy — long press to select text');}
  document.body.removeChild(ta);
}
function downloadFileAgain(){
  var excelHtml=generateExcel();
  var baseName=roundData.building+'_Rounds_'+roundData.date+'_'+roundData.technician.replace(/[^a-zA-Z0-9]/g,'');
  downloadBlob(new Blob([excelHtml],{type:'application/vnd.ms-excel'}),baseName+'.xls');
  showToast('File downloaded again');
}

function downloadAgain(){if(lastSubmitBlob)downloadBlob(lastSubmitBlob,lastSubmitFilename);}
function startHandoffFromDone(){
  var btn=document.querySelector('.btn-handoff');
  if(btn)btn.style.display='none';
  var container=document.getElementById('doneHandoffArea');
  if(!container){
    container=document.createElement('div');container.id='doneHandoffArea';
    container.style.cssText='margin-top:12px';
    document.querySelector('.done-content').insertBefore(container,document.querySelector('.btn-new-round'));
  }
  container.innerHTML='<div style="background:var(--surface);border:1px solid var(--amber);border-radius:var(--radius);padding:14px">'
    +'<div style="font-size:14px;font-weight:700;color:var(--amber);margin-bottom:8px">&#128221; Handoff Note for Next Shift</div>'
    +'<textarea id="doneHandoffText" inputmode="text" style="width:100%;min-height:80px;padding:12px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text);font-size:15px;resize:vertical" placeholder="Leave notes for the incoming shift..."></textarea>'
    +'<div style="display:flex;gap:8px;margin-top:8px">'
    +'<button onclick="submitDoneHandoff()" style="flex:1;padding:14px;background:var(--amber);color:#000;border:none;border-radius:var(--radius-sm);font-size:15px;font-weight:700;cursor:pointer;min-height:48px">Submit Note</button>'
    +'<button onclick="cancelDoneHandoff()" style="padding:14px 20px;background:var(--card);color:var(--muted);border:1px solid var(--border);border-radius:var(--radius-sm);font-size:14px;cursor:pointer;min-height:48px">Cancel</button>'
    +'</div></div>';
}
function submitDoneHandoff(){
  var text=document.getElementById('doneHandoffText');if(!text||!text.value.trim()){showToast('Please enter a note');return;}
  var note={alias:roundData.technician,shift:roundData.shift,note:text.value.trim(),timestamp:Date.now()};
  if(db&&activeBuilding)saveToFirebase(note,'handoff/'+activeBuilding+'/current');
  // Archive
  if(db&&activeBuilding)saveToFirebase(note,'handoff/'+activeBuilding+'/history/'+Date.now());
  cancelDoneHandoff();showToast('Handoff note saved!');
}
function cancelDoneHandoff(){
  var area=document.getElementById('doneHandoffArea');if(area)area.remove();
  var btn=document.querySelector('.btn-handoff');if(btn)btn.style.display='';
}

function generateExcel(){
  var h='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">';
  h+='<he'+'ad><meta charset="UTF-8"><sty'+'le>';
  h+='table{border-collapse:collapse;font-family:Calibri,Arial,sans-serif;font-size:11px;width:100%}';
  h+='td,th{border:1px solid #d5d9d9;padding:6px 10px}';
  h+='.title{background:#1e1e1e;color:#06b6d4;font-size:16px;font-weight:bold;text-align:center;border:none}';
  h+='.info-label{background:#f4f4f4;font-weight:bold;border:none}.info-value{border:none}';
  h+='.section-title{background:#06b6d4;color:#000;font-weight:bold;font-size:12px}';
  h+='.col-header{background:#1e1e1e;color:#fff;font-weight:bold;text-align:center;font-size:10px}';
  h+='.ok{background:#dcfce7;color:#166534;text-align:center}.issue{background:#fef2f2;color:#991b1b;font-weight:bold;text-align:center}';
  h+='.note-cell{background:#fffbeb;font-style:italic}.summary-hdr{background:#06b6d4;color:#000;font-weight:bold}.summary{background:#f0fdfa}';
  h+='</'+'style></'+'head><'+'body><table>';
  h+='<tr><td class="title" colspan="4">SBN DAILY ROUNDS REPORT</td></tr>';
  h+='<tr><td class="info-label">Building</td><td class="info-value">'+roundData.building+'</td><td class="info-label">Date</td><td class="info-value">'+roundData.date+'</td></tr>';
  h+='<tr><td class="info-label">Alias</td><td class="info-value">'+roundData.technician+'</td><td class="info-label">Shift</td><td class="info-value">'+roundData.shift+'</td></tr>';
  if(roundData.ticketUrl)h+='<tr><td class="info-label">Daily Ticket</td><td class="info-value" colspan="3"><a href="'+roundData.ticketUrl+'">'+roundData.ticketUrl+'</a></td></tr>';
  h+='<tr><td colspan="4" style="border:none;height:10px"></td></tr>';
  roundData.sections.forEach(function(sec){
    h+='<tr><td class="section-title" colspan="4">'+sec.name+'</td></tr>';
    if(sec.completedBy)h+='<tr><td colspan="4" style="font-size:10px;color:#166534;background:#f0fdf4;font-style:italic">Completed by '+sec.completedBy+'</td></tr>';
    sec.items.forEach(function(item){if(!item)return;var cls='';
      if(item.status==='ok'||item.status==='expected')cls='ok';else if(item.status==='issue'||item.status==='unexpected')cls='issue';
      h+='<tr><td>'+(item.name||'-')+'</td><td class="'+cls+'">'+(item.status||'-')+'</td>';
      h+='<td class="'+(item.note?'note-cell':'')+'">'+(item.note||'')+'</td>';
      h+='<td>'+(item.photos>0?item.photos+' photo(s)':'')+'</td></tr>';
    });
    if(sec.notes)h+='<tr><td colspan="4" class="note-cell">Notes: '+sec.notes+'</td></tr>';
  });
  var totalItems=0,okCount=0,issueCount=0;
  roundData.sections.forEach(function(sec){sec.items.forEach(function(item){if(!item)return;totalItems++;if(item.status==='ok'||item.status==='expected')okCount++;if(item.status==='issue'||item.status==='unexpected')issueCount++;});});
  h+='<tr><td colspan="4" style="border:none;height:10px"></td></tr>';
  h+='<tr><td class="summary-hdr" colspan="4">SUMMARY</td></tr>';
  h+='<tr><td class="summary">Total</td><td class="summary">'+totalItems+'</td><td class="summary">OK</td><td class="summary">'+okCount+'</td></tr>';
  h+='<tr><td class="summary">Issues</td><td class="summary" style="'+(issueCount>0?'color:#991b1b;font-weight:bold':'')+'">'+issueCount+'</td><td></td><td></td></tr>';
  
  // Edit trail in export
  if(roundData.editLog&&roundData.editLog.length>0){
    h+='<tr><td colspan="4" style="border:none;height:10px"></td></tr>';
    h+='<tr><td class="summary-hdr" colspan="4">EDIT TRAIL</td></tr>';
    for(var el=0;el<roundData.editLog.length;el++){
      var entry=roundData.editLog[el];
      var ts=entry.timestamp?new Date(entry.timestamp).toLocaleString():'';
      h+='<tr><td>'+(entry.alias||'Unknown')+'</td><td>'+(entry.action||'')+'</td><td colspan="2">'+ts+'</td></tr>';
    }
  }
h+='</table></'+'body></html>';return h;
}

/* ===== RECENT ROUNDS ===== */
function loadRecentRounds(filterBuilding){
  tryClipboardAutoFill();
  if(!db){document.getElementById('recentList').innerHTML='<div style="color:var(--muted);font-size:14px;text-align:center;padding:16px;">Offline</div>';return;}
  var buildings=filterBuilding?[filterBuilding]:buildingList;
  var allRounds=[];var pending=0;var today=new Date();
  for(var d=0;d<7;d++){var dt=new Date(today);dt.setDate(dt.getDate()-d);
    var ds=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');
    for(var b=0;b<buildings.length;b++){pending++;(function(bldg,dateStr){
      db.ref('rounds/'+bldg+'/'+dateStr).once('value',function(snap){
        var val=snap.val();if(val){var keys=Object.keys(val);for(var k=0;k<keys.length;k++){var r=val[keys[k]];r._fbKey='rounds/'+bldg+'/'+dateStr+'/'+keys[k];allRounds.push(r);}}
        pending--;if(pending===0)renderRecentRounds(allRounds);
      },function(){pending--;if(pending===0)renderRecentRounds(allRounds);});
    })(buildings[b],ds);}}
}
function renderRecentRounds(rounds){
  var listEl=document.getElementById('recentList');
  if(rounds.length===0){listEl.innerHTML='<div style="color:var(--muted);font-size:14px;text-align:center;padding:16px;">No recent rounds found</div>';return;}
  rounds.sort(function(a,b){return(b.startTime||0)-(a.startTime||0);});var html='';
  // Show in-progress rounds prominently at top
  var inProgress=rounds.filter(function(r){return r.status==='in_progress';});
  if(inProgress.length>0){
    html+='<div style="margin-bottom:12px">';
    for(var ip=0;ip<inProgress.length;ip++){
      var r=inProgress[ip];
      html+='<div class="recent-card" style="border:2px solid var(--amber);background:rgba(245,158,11,0.08)">';
      html+='<div class="recent-info"><div class="r-bldg" style="color:var(--amber)">&#128260; '+(r.building||'?')+' \u2014 '+(r.date||'')+' (IN PROGRESS)</div>';
      html+='<div class="r-meta">'+(r.technician||'')+' | '+(r.shift||'')+'</div></div>';
      html+='<div class="recent-actions">';
      html+='<button class="btn-edit" style="background:var(--amber);color:#000" onclick="editRound(\''+escHtml(r._fbKey||'').replace(/\x27/g,"\\'")+'\')">&#9654; Resume</button>';
      html+='</div></div>';
    }
    html+='</div>';
  }
  for(var i=0;i<Math.min(rounds.length,20);i++){
    var r=rounds[i];var statusBadge=r.status==='completed'?'<span style="color:var(--green)">&#9989; Complete</span>':'<span style="color:var(--accent)">&#128260; In Progress</span>';
    html+='<div class="recent-card"><div class="recent-info"><div class="r-bldg">'+(r.building||'?')+' &mdash; '+(r.date||'')+'</div>';
    html+='<div class="r-meta">'+(r.technician||'')+' | '+(r.shift||'')+' | '+statusBadge+'</div></div>';
    html+='<div class="recent-actions">';
    html+='<button class="btn-edit" onclick="editRound(\''+escHtml(r._fbKey||'').replace(/'/g,"\\'")+'\')" >&#9999;&#65039; Edit</button>';
    html+='<button style="padding:10px 12px;border-radius:var(--radius-sm);font-size:13px;font-weight:600;cursor:pointer;border:none;min-height:44px;background:rgba(245,158,11,0.15);color:var(--amber)" onclick="archiveRound(\''+escHtml(r._fbKey||'').replace(/\x27/g,"\\'")+'\')" >&#128230;</button>';
    if(canDelete(document.getElementById('techName')?document.getElementById('techName').value.trim():'')){html+='<button class="btn-del" onclick="deleteRound(\''+escHtml(r._fbKey||'').replace(/'/g,"\\'")+'\')" >&#128465; Del</button>';}
    html+='</div></div>';
  }
  document.getElementById('recentList').innerHTML=html;
}
function editRound(fbKey){
  if(!db){showToast('Cannot edit offline');return;}
  // Prompt for alias before editing
  var editAlias=prompt('Enter your alias to edit this round:');
  if(!editAlias||!editAlias.trim()){showToast('Alias required to edit');return;}
  editAlias=editAlias.trim();

  db.ref(fbKey).once('value',function(snap){
    try{
    var data=snap.val();if(!data){showToast('Round not found');return;}
    roundData=data;
    // Initialize edit log if not exists
    if(!roundData.editLog)roundData.editLog=[];
    // Log this edit
    roundData.editLog.push({alias:editAlias,timestamp:Date.now(),action:'opened for edit'});
    roundData.lastEditedBy=editAlias;roundData.lastEditedAt=Date.now();
    isEditing=true;editKey=fbKey;currentSection=roundData.currentSection||0;photoStore={};noteEditState={};
    activeBuilding=roundData.building;
    // Load building sections before opening (handles different section configs)
    db.ref('config/sections/'+activeBuilding).once('value',function(secSnap){
      var secVal=secSnap.val();
      activeSections=defaultSections;
      // Ensure round data sections match activeSections length
      while(roundData.sections.length<activeSections.length){
        var sec=activeSections[roundData.sections.length];
        var items=[];if(sec.cols){for(var j=0;j<sec.cols.length;j++)items.push({name:sec.cols[j],status:'',note:'',photos:0,noteLocked:false});}
        roundData.sections.push({name:sec.name,status:'pending',allOk:false,completedBy:'',completedAt:'',notes:'',items:items});
      }
      document.getElementById('headerSub').textContent=activeBuilding+' — '+(roundData.shift||'')+' — '+(roundData.technician||'');
      showScreen('mainScreen');loadZoneStatuses();loadFindingsFromFirebase();loadHistoryFromFirebase();loadHandoffNotes();updateSimBanner();switchMainTab('walk');
    },function(){activeSections=defaultSections;
      document.getElementById('headerSub').textContent=activeBuilding+' — '+(roundData.shift||'')+' — '+(roundData.technician||'');
      showScreen('mainScreen');loadZoneStatuses();loadFindingsFromFirebase();loadHistoryFromFirebase();loadHandoffNotes();updateSimBanner();switchMainTab('walk');
    });
    }catch(e){showToast('Error opening round: '+e.message);}
  });
}
function deleteRound(fbKey){
  var delAlias=prompt('Enter your alias to confirm deletion:');
  if(!delAlias||!delAlias.trim()){showToast('Alias required to delete');return;}
  delAlias=delAlias.trim();
  if(!canDelete(delAlias)){showToast('Admin access required to delete rounds. Contact your CE or FM.');return;}
  if(!confirm('Delete this round? This action cannot be undone.'))return;
  // Log the deletion
  if(db){db.ref(fbKey).once('value',function(snap){var data=snap.val();if(data){if(!data.editLog)data.editLog=[];data.editLog.push({alias:delAlias,timestamp:Date.now(),action:'deleted round'});db.ref('audit/deletions/'+Date.now()).set({fbKey:fbKey,deletedBy:delAlias,timestamp:Date.now(),building:data.building||'',date:data.date||'',technician:data.technician||''});}});}
  deleteFromFirebase(fbKey);showToast('Round deleted');setTimeout(loadRecentRounds,500);}
function archiveRound(fbKey){
  if(!db||!fbKey)return;
  if(!confirm('Archive this round? It will be removed from the home screen but saved for later.'))return;
  db.ref(fbKey).once('value',function(snap){
    var data=snap.val();if(!data){showToast('Round not found');return;}
    // Save to archived path
    var archiveKey=fbKey.replace('rounds/','archived/');
    saveToFirebase(data,archiveKey);
    // Remove from active rounds
    deleteFromFirebase(fbKey);
    showToast('Round archived');
    setTimeout(loadRecentRounds,500);
  });
}
var showingArchived=false;
function toggleArchivedRounds(){
  showingArchived=!showingArchived;
  var btn=document.getElementById('btnToggleArchived');
  if(showingArchived){
    if(btn)btn.innerHTML='&#128260; Recent';
    loadArchivedRounds();
  }else{
    if(btn)btn.innerHTML='&#128230; Archived';
    loadRecentRounds();
  }
}
function loadArchivedRounds(){
  if(!db){document.getElementById('recentList').innerHTML='<div style="color:var(--muted);font-size:14px;text-align:center;padding:16px;">Offline</div>';return;}
  var buildings=buildingList;var allRounds=[];var pending=0;
  for(var b=0;b<buildings.length;b++){pending++;(function(bldg){
    db.ref('archived/'+bldg).once('value',function(snap){
      var val=snap.val();if(val){
        var dates=Object.keys(val);dates.forEach(function(dt){
          var rounds=val[dt];var keys=Object.keys(rounds);
          keys.forEach(function(k){var r=rounds[k];r._fbKey='archived/'+bldg+'/'+dt+'/'+k;r._archived=true;allRounds.push(r);});
        });
      }
      pending--;if(pending===0)renderArchivedRounds(allRounds);
    },function(){pending--;if(pending===0)renderArchivedRounds(allRounds);});
  })(buildings[b]);}
}
function renderArchivedRounds(rounds){
  var listEl=document.getElementById('recentList');
  if(rounds.length===0){listEl.innerHTML='<div style="color:var(--muted);font-size:14px;text-align:center;padding:16px;">No archived rounds</div>';return;}
  rounds.sort(function(a,b){return(b.startTime||0)-(a.startTime||0);});
  var html='';
  for(var i=0;i<Math.min(rounds.length,30);i++){
    var r=rounds[i];
    html+='<div class="recent-card" style="border-left:3px solid var(--amber)"><div class="recent-info"><div class="r-bldg">'+(r.building||'?')+' &mdash; '+(r.date||'')+'</div>';
    html+='<div class="r-meta">'+(r.technician||'')+' | '+(r.shift||'')+' | <span style="color:var(--amber)">&#128230; Archived</span></div></div>';
    html+='<div class="recent-actions">';
    html+='<button style="padding:10px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;cursor:pointer;border:none;min-height:44px;background:rgba(34,197,94,0.15);color:var(--green)" onclick="restoreRound(\''+escHtml(r._fbKey||'').replace(/\x27/g,"\\'")+'\')">Restore</button>';
    if(canDelete(document.getElementById('techName')?document.getElementById('techName').value.trim():'')){html+='<button class="btn-del" onclick="deleteRound(\''+escHtml(r._fbKey||'').replace(/\x27/g,"\\'")+'\')">&#128465;</button>';}
    html+='</div></div>';
  }
  listEl.innerHTML=html;
}
function restoreRound(fbKey){
  if(!db||!fbKey)return;
  db.ref(fbKey).once('value',function(snap){
    var data=snap.val();if(!data){showToast('Round not found');return;}
    var activeKey=fbKey.replace('archived/','rounds/');
    saveToFirebase(data,activeKey);
    deleteFromFirebase(fbKey);
    showToast('Round restored');
    loadArchivedRounds();
  });
}
/* ===== COMPLIANCE DASHBOARD ===== */
function renderCompliance(){
  if(!db){
    document.getElementById('complianceSummary').innerHTML='<div class="compliance-stat" style="grid-column:1/4"><div class="compliance-stat-val">&#8987;</div><div class="compliance-stat-lbl">Connecting to Firebase...</div></div>';
    document.getElementById('complianceGrid').innerHTML='';
    setTimeout(renderCompliance,1000);return;
  }
  var today=new Date();
  var todayStr=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  var pending=0;var results={};
  buildingList.forEach(function(bldg){
    results[bldg]={walked:false,lastWalk:null,lastTech:'',lastShift:'',findings:0};
    pending++;
    db.ref('rounds/'+bldg+'/'+todayStr).once('value',function(snap){
      var val=snap.val();
      if(val){var keys=Object.keys(val);results[bldg].walked=true;
        keys.forEach(function(k){var r=val[k];if(r.startTime&&(!results[bldg].lastWalk||r.startTime>results[bldg].lastWalk)){results[bldg].lastWalk=r.startTime;results[bldg].lastTech=r.technician||'';results[bldg].lastShift=r.shift||'';}});}
      pending--;if(pending===0)renderComplianceResults(results);
    },function(){pending--;if(pending===0)renderComplianceResults(results);});
    db.ref('findings/'+bldg).once('value',function(snap){
      var val=snap.val();if(val){var fkeys=Object.keys(val);fkeys.forEach(function(fk){if(val[fk].status==='open')results[bldg].findings++;});}
    });
  });
}
function renderComplianceResults(results){
  var walkedCount=0,notWalkedCount=0,totalFindings=0;
  buildingList.forEach(function(b){if(results[b].walked)walkedCount++;else notWalkedCount++;totalFindings+=results[b].findings;});
  var sHtml='';
  sHtml+='<div class="compliance-stat"><div class="compliance-stat-val" style="color:var(--green)">'+walkedCount+'</div><div class="compliance-stat-lbl">Walked</div></div>';
  sHtml+='<div class="compliance-stat"><div class="compliance-stat-val" style="color:var(--red)">'+notWalkedCount+'</div><div class="compliance-stat-lbl">Not Walked</div></div>';
  sHtml+='<div class="compliance-stat" style="cursor:pointer" onclick="showComplianceFindings()"><div class="compliance-stat-val" style="color:var(--amber)">'+totalFindings+'</div><div class="compliance-stat-lbl">Open Findings &#8594;</div></div>';
  document.getElementById('complianceSummary').innerHTML=sHtml;
  var sorted=buildingList.slice().sort(function(a,b){if(results[a].walked===results[b].walked)return a.localeCompare(b);return results[a].walked?1:-1;});
  var gHtml='';
  sorted.forEach(function(bldg){var r=results[bldg];var cls=r.walked?'walked-today':'not-walked';
    var badge=r.walked?'<span class="compliance-badge compliance-badge-ok">&#9989; Walked</span>':'<span class="compliance-badge compliance-badge-miss">&#10060; Not Walked</span>';
    var status=r.walked?'Last: '+escHtml(r.lastTech)+' &bull; '+escHtml(r.lastShift)+' &bull; '+timeAgo(r.lastWalk):'No walks recorded today';
    if(r.findings>0)status+=' &bull; <span style="color:var(--red)">'+r.findings+' open finding'+(r.findings>1?'s':'')+'</span>';
    gHtml+='<div class="compliance-card '+cls+'"><div class="compliance-info"><div class="compliance-bldg">'+bldg+'</div><div class="compliance-status">'+status+'</div></div>'+badge+'</div>';
  });
  document.getElementById('complianceGrid').innerHTML=gHtml;
}
function showComplianceFindings(){
  if(!db)return;
  var container=document.getElementById('tabCompliance');
  container.innerHTML='<div class="compliance-findings-view"><div class="compliance-back" onclick="backToCompliance()">&#8592; Back to Dashboard</div><div style="font-size:16px;font-weight:700;margin-bottom:16px">All Open Findings</div><div id="complianceFindingsList"><div style="text-align:center;padding:24px;color:var(--muted)">Loading findings...</div></div></div>';
  var pending=0;var allF={};
  buildingList.forEach(function(bldg){
    allF[bldg]=[];pending++;
    db.ref('findings/'+bldg).once('value',function(snap){
      var val=snap.val();if(val){var keys=Object.keys(val);keys.forEach(function(k){var f=val[k];if(f.status==='open'){f._key=k;f._bldg=bldg;allF[bldg].push(f);}});}
      pending--;if(pending===0)renderComplianceFindings(allF);
    },function(){pending--;if(pending===0)renderComplianceFindings(allF);});
  });
}
function renderComplianceFindings(allF){
  var html='';var total=0;
  buildingList.forEach(function(bldg){
    var findings=allF[bldg]||[];
    findings.sort(function(a,b){return(b.timestamp||0)-(a.timestamp||0);});
    total+=findings.length;
    if(findings.length===0)return;
    html+='<div class="compliance-bldg-group">';
    html+='<div class="compliance-bldg-label"><span>'+escHtml(bldg)+'</span><span class="compliance-bldg-count">'+findings.length+' open</span></div>';
    findings.forEach(function(f){
      html+='<div class="finding-card"><div class="finding-zone">'+escHtml(f.zone||'')+'</div>';
      html+='<div class="finding-item">'+escHtml(f.item||'')+'</div>';
      if(f.note)html+='<div class="finding-note">'+escHtml(f.note)+'</div>';
      html+='<div class="finding-meta"><span>'+escHtml(f.technician||'')+' &bull; '+escHtml(f.date||'')+(f.photos?' &bull; '+f.photos+' photo(s)':'')+'</span></div></div>';
    });
    html+='</div>';
  });
  if(total===0)html='<div class="finding-empty">&#9989; No open findings across any building</div>';
  else html='<div style="font-size:13px;color:var(--muted);margin-bottom:12px">'+total+' open finding'+(total>1?'s':'')+' across all buildings</div>'+html;
  document.getElementById('complianceFindingsList').innerHTML=html;
}
function backToCompliance(){
  var container=document.getElementById('tabCompliance');
  container.innerHTML='<div class="compliance-header"><strong>Campus Compliance</strong><br>Building walk status for today</div><div class="compliance-summary" id="complianceSummary"></div><div class="compliance-grid" id="complianceGrid"></div>';
  renderCompliance();
}

/* ===== SHIFT HANDOFF NOTES ===== */
var handoffData=null;var handoffEditing=false;
function loadHandoffNotes(){
  if(!db||!activeBuilding)return;
  db.ref('handoff/'+activeBuilding+'/current').once('value',function(snap){handoffData=snap.val();renderHandoff();});
}
function renderHandoff(){
  var area=document.getElementById('handoffArea');if(!area)return;
  if(!handoffData&&!handoffEditing){area.innerHTML='';return;}
  var html='';
  if(handoffData&&!handoffEditing){
    html+='<div class="handoff-card">';
    html+='<div class="handoff-title">&#128221; Shift Handoff Note</div>';
    html+='<div class="handoff-meta">From: '+escHtml(handoffData.alias||'Unknown')+' &bull; '+escHtml(handoffData.shift||'')+' &bull; '+(handoffData.timestamp?formatDateTime(handoffData.timestamp):'')+'</div>';
    html+='<div class="handoff-text">'+escHtml(handoffData.note||'').replace(/\n/g,'<br>')+'</div>';
    html+='<div class="handoff-actions">';
    html+='<button class="handoff-btn handoff-btn-ack" onclick="ackHandoff()">&#9989; Acknowledged</button>';
    html+='<button class="handoff-btn handoff-btn-add" onclick="startHandoffEdit()">&#9998; Add Note</button>';
    html+='<button class="handoff-btn handoff-btn-clear" onclick="clearHandoff()">Clear</button>';
    html+='</div></div>';
  }
  if(handoffEditing){
    html+='<div class="handoff-card" style="border-color:var(--accent)">';
    html+='<div class="handoff-title" style="color:var(--accent)">&#128221; Leave Handoff Note for Next Shift</div>';
    html+='<textarea class="handoff-input" id="handoffInput" placeholder="Notes for the incoming shift...">'+(handoffData?escHtml(handoffData.note||''):'')+'</textarea>';
    html+='<div class="handoff-actions">';
    html+='<button class="handoff-btn handoff-btn-add" onclick="saveHandoff()">&#128228; Save Note</button>';
    html+='<button class="handoff-btn handoff-btn-clear" onclick="cancelHandoffEdit()">Cancel</button>';
    html+='</div></div>';
  }
  area.innerHTML=html;
}
function ackHandoff(){if(db&&activeBuilding&&handoffData){handoffData.acknowledgedBy=roundData?roundData.technician:'';handoffData.acknowledgedAt=Date.now();db.ref('handoff/'+activeBuilding+'/history/'+Date.now()).set(handoffData);db.ref('handoff/'+activeBuilding+'/current').remove();}handoffData=null;renderHandoff();showToast('Handoff acknowledged');}
function startHandoffEdit(){handoffEditing=true;renderHandoff();}
function cancelHandoffEdit(){handoffEditing=false;renderHandoff();}
function saveHandoff(){
  var input=document.getElementById('handoffInput');var note=input?input.value.trim():'';
  if(!note){showToast('Enter a note first');return;}
  var data={note:note,alias:roundData?roundData.technician:'Unknown',shift:roundData?roundData.shift:'',building:activeBuilding,timestamp:Date.now()};
  saveToFirebase(data,'handoff/'+activeBuilding+'/current');
  saveToFirebase(data,'handoff/'+activeBuilding+'/history/'+Date.now());
  handoffData=data;handoffEditing=false;renderHandoff();showToast('Handoff note saved!');
}
function clearHandoff(){
  if(!confirm('Clear this handoff note?'))return;
  if(db&&activeBuilding){if(handoffData)saveToFirebase(handoffData,'handoff/'+activeBuilding+'/history/'+Date.now());db.ref('handoff/'+activeBuilding+'/current').remove();}
  handoffData=null;renderHandoff();showToast('Handoff note cleared');
}
function showHandoffFromDone(){showScreen('mainScreen');handoffEditing=true;renderHandoff();switchMainTab('zones');showToast('Write your handoff note for the next shift');}

/* ===== SHARE FILE ===== */
var lastSubmitBlob=null;var lastSubmitFilename='';var lastSubmitMime='';var lastSubmitSummary='';var lastReportKey='';var lastReportName='';
function shareLastFile(){
  if(!lastSubmitBlob)return;
  try{var file=new File([lastSubmitBlob],lastSubmitFilename,{type:lastSubmitMime});
  navigator.share({title:lastSubmitFilename.replace(/[._]/g,' '),text:lastSubmitSummary,files:[file]}).then(function(){showToast('Shared successfully!');}).catch(function(err){if(err.name!=='AbortError'){downloadBlob(lastSubmitBlob,lastSubmitFilename);showToast('Share failed — file downloaded');}});
  }catch(e){downloadBlob(lastSubmitBlob,lastSubmitFilename);showToast('Share unavailable — file downloaded');}
}
function downloadLastFile(){if(!lastSubmitBlob)return;downloadBlob(lastSubmitBlob,lastSubmitFilename);showToast('File downloaded!');}

function openComplianceDirect(){
  activeBuilding='_compliance_';
  showScreen('mainScreen');
  // Hide zones-specific UI
  document.getElementById('dashHeader').style.display='none';
  document.getElementById('simBanner').style.display='none';
  switchMainTab('compliance');
  // Hide non-compliance drawer buttons
  var btns=document.querySelectorAll('.drawer-btn');
  for(var i=0;i<btns.length;i++){
    var tab=btns[i].getAttribute('data-tab');
    if(tab!=='compliance')btns[i].style.display='none';
    else btns[i].classList.add('active');
  }
  // Add a back button
  var nav=document.getElementById('drawerNav');
  if(!document.getElementById('btnBackToStart')){
    var backBtn=document.createElement('button');
    backBtn.id='btnBackToStart';backBtn.className='drawer-btn';
    backBtn.innerHTML='&#8592; Back';
    backBtn.onclick=function(){resetApp();};
    nav.insertBefore(backBtn,nav.firstChild);
  }
}

function resetApp(){
  // Restore drawer buttons visibility
  var btns=document.querySelectorAll('.drawer-btn');
  for(var i=0;i<btns.length;i++)btns[i].style.display='';
  var backBtn=document.getElementById('btnBackToStart');
  if(backBtn)backBtn.remove();
  document.getElementById('dashHeader').style.display='';
exitCompactWalk();roundData=null;photoStore={};currentSection=0;isEditing=false;editKey=null;zoneStatusCache={};allFindings=[];allHistory=[];activeBuilding='';noteEditState={};handoffData=null;handoffEditing=false;lastSubmitBlob=null;document.getElementById('headerSub').textContent='Select building to begin';document.getElementById('clipboardHint').style.display='none';document.getElementById('simBanner').style.display='none';showScreen('startScreen');loadRecentRounds();}

/* ===== DARK/LIGHT MODE ===== */
function toggleMode(){var btn=document.getElementById('modeBtn');if(document.body.classList.contains('light-mode')){document.body.classList.remove('light-mode');btn.innerHTML='&#9728;&#65039; Light';try{localStorage.setItem('sbn-rounds-theme','dark');}catch(e){}}else{document.body.classList.add('light-mode');btn.innerHTML='&#127769; Dark';try{localStorage.setItem('sbn-rounds-theme','light');}catch(e){}}}
function loadTheme(){try{if(localStorage.getItem('sbn-rounds-theme')==='light'){document.body.classList.add('light-mode');document.getElementById('modeBtn').innerHTML='&#127769; Dark';}}catch(e){}}

/* ===== CAMERA MODAL ===== */
if(document.getElementById('btnCapture'))document.getElementById('btnCapture').addEventListener('click',function(){
  var v=document.getElementById('cameraVideo');var c=document.getElementById('cameraCanvas');
  var maxW=800;var w=v.videoWidth,h=v.videoHeight;if(w>maxW){h=Math.round(h*(maxW/w));w=maxW;}
  c.width=w;c.height=h;c.getContext('2d').drawImage(v,0,0,w,h);
  var comp=c.toDataURL('image/jpeg',0.8);var key=cameraSIdx+'-'+cameraIIdx;
  if(!photoStore[key])photoStore[key]=[];
  if(photoStore[key].length<3){photoStore[key].push(comp);roundData.sections[cameraSIdx].items[cameraIIdx].photos=photoStore[key].length;renderWalkthrough();}
  closeCameraModal();
});
if(document.getElementById('btnCamCancel'))document.getElementById('btnCamCancel').addEventListener('click',closeCameraModal);
if(document.getElementById('btnFlipCam'))document.getElementById('btnFlipCam').addEventListener('click',function(){
  cameraFacing=(cameraFacing==='environment')?'user':'environment';
  startCameraStream().catch(function(){cameraFacing=(cameraFacing==='environment')?'user':'environment';startCameraStream().catch(function(){});});
});
function closeCameraModal(){if(cameraStream){cameraStream.getTracks().forEach(function(t){t.stop();});cameraStream=null;}document.getElementById('cameraModal').classList.remove('active');}

/* ===== KEYBOARD SCROLL FIX ===== */
(function(){
  var spacer=null;
  document.addEventListener('focusin',function(e){
    var tag=e.target.tagName;
    if(tag==='INPUT'||tag==='TEXTAREA'){
      e.target.setAttribute('enterkeyhint','done');
      // Add spacer to create room for scrolling
      if(!spacer){
        spacer=document.createElement('div');
        spacer.id='kbSpacer';
        spacer.style.cssText='height:50vh;flex-shrink:0';
      }
      // Find the scrollable parent and append spacer
      var sp=e.target.closest('.content')||e.target.closest('[id*=Content]')||e.target.parentNode;
      if(sp&&!sp.querySelector('#kbSpacer'))sp.appendChild(spacer);
      // Scroll element into view after keyboard opens
      var el=e.target;
      setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'center'});},400);
    }
  });
  document.addEventListener('focusout',function(){
    // Remove spacer after keyboard closes
    setTimeout(function(){
      var s=document.getElementById('kbSpacer');
      if(s)s.remove();
    },200);
  });
  // Also handle virtualKeyboard API for Windows tablets
  if('virtualKeyboard' in navigator){navigator.virtualKeyboard.overlaysContent=true;}
})();
/* ===== SERVICE WORKER ===== */
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(function(){});}


/* ===== AUTO-SAVE ON BACKGROUND ===== */
document.addEventListener('visibilitychange',function(){if(document.hidden)autoSaveRound();});
window.addEventListener('beforeunload',function(){autoSaveRound();});
/* ===== INIT ===== */
function waitForFirebase(){try{if(typeof firebase!=='undefined'&&firebase.initializeApp){initFirebase();loadRoles();loadBuildingConfig();loadRecentRounds();}else{setTimeout(waitForFirebase,100);}}catch(e){}}
function loadBuildingConfig(){
  if(!db)return;syncOfflineQueue();updateOfflineBadge();
  db.ref('config/buildings').once('value',function(snap){
    var val=snap.val();if(val&&Array.isArray(val)&&val.length>0){
      buildingList=val;
      // Preserve user selections before re-init
      var prevBldg=getSelectedBuilding();
      var prevShift=getSelectedShift();
      var prevAlias=document.getElementById('techName').value;
      var prevTicket=document.getElementById('ticketUrl').value;
      initStartScreen();
      // Restore selections
      if(prevBldg){var bb=document.querySelector('.building-btn[data-bldg="'+prevBldg+'"]');if(bb)bb.classList.add('selected');}
      if(prevShift){var sb=document.querySelector('.shift-btn[data-shift="'+prevShift+'"]');if(sb)sb.classList.add('selected');}
      if(prevAlias)document.getElementById('techName').value=prevAlias;
      if(prevTicket)document.getElementById('ticketUrl').value=prevTicket;
      checkReady();
    }
    else{db.ref('config/buildings').set(buildingList);}
  });
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){loadTheme();initStartScreen();waitForFirebase();});}else{loadTheme();initStartScreen();waitForFirebase();}
