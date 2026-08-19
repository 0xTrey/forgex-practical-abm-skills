const C = {
  cream: {r:0.9804,g:0.9686,b:0.9490}, pink: {r:0.9020,g:0.2196,b:0.5333},
  plum: {r:0.2392,g:0.1216,b:0.3608}, ink: {r:0.0431,g:0.0431,b:0.0588},
  lime: {r:0.7804,g:0.9490,b:0.3608}, white: {r:1,g:1,b:1},
  muted: {r:0.37,g:0.34,b:0.39}, pale: {r:0.93,g:0.90,b:0.95}
};
const F = "Inter";
await Promise.all([
  figma.loadFontAsync({family:F,style:"Extra Bold"}),
  figma.loadFontAsync({family:F,style:"Bold"}),
  figma.loadFontAsync({family:F,style:"Semi Bold"}),
  figma.loadFontAsync({family:F,style:"Regular"}),
  figma.loadFontAsync({family:F,style:"Medium"})
]);
const ids=[];
function track(n){ids.push(n.id);return n;}
function rect(p,x,y,w,h,fill,r=0){const n=track(figma.createRectangle());p.appendChild(n);n.resize(w,h);n.fills=[{type:"SOLID",color:fill}];n.cornerRadius=r;n.x=x;n.y=y;return n;}
function ellipse(p,x,y,w,h,fill){const n=track(figma.createEllipse());p.appendChild(n);n.resize(w,h);n.fills=[{type:"SOLID",color:fill}];n.x=x;n.y=y;return n;}
function text(p,s,x,y,w,h,size,style,color,align="LEFT"){const n=track(figma.createText());p.appendChild(n);n.fontName={family:F,style};n.fontSize=size;n.textAutoResize="NONE";n.resize(w,h);n.characters=s;n.fills=[{type:"SOLID",color}];n.textAlignHorizontal=align;n.lineHeight={unit:"PERCENT",value:108};n.x=x;n.y=y;return n;}
function label(p,s,x,y,w,color){const n=text(p,s,x,y,w,28,17,"Bold",color);n.letterSpacing={unit:"PERCENT",value:12};return n;}
function baseSlide(name,bg){const s=track(figma.createSlide());s.name=name;s.fills=[{type:"SOLID",color:bg}];return s;}

// 01 — title
const s1=baseSlide("01 — AI for ABM",C.cream);
label(s1,"FORGEX FIELD GUIDE",92,72,380,C.pink);
text(s1,"AI for ABM:",92,185,1260,150,126,"Extra Bold",C.ink);
text(s1,"Setting Up the Foundations",92,320,1500,175,112,"Extra Bold",C.pink);
text(s1,"Context, skills, agents, MCP, and human review",98,548,1120,62,40,"Medium",C.plum);
text(s1,"Trey Harnden  ·  ForgeX  ·  September 17, 2026",98,928,900,42,25,"Semi Bold",C.muted);
rect(s1,-20,820,520,12,C.pink,6);rect(s1,486,724,12,108,C.pink,6);rect(s1,486,712,800,12,C.pink,6);rect(s1,1274,444,12,280,C.pink,6);
ellipse(s1,1234,404,92,92,C.lime);ellipse(s1,1262,432,36,36,C.plum);
s1.speakerNotes="Welcome everyone. This is not a Claude-versus-ChatGPT comparison. The useful question is what must be true for AI work inside ABM to become repeatable, reviewable, and safe enough for a team. Claude is our concrete example; the operating model is portable.\n\n**Takeaway:** We are building an operating foundation, not collecting tricks.";

// 02 — repeatability gap
const s2=baseSlide("02 — The repeatability gap",C.ink);
label(s2,"THE REAL PROBLEM",92,72,380,C.lime);
text(s2,"ABM teams do not need\nmore prompts.",92,150,920,250,100,"Extra Bold",C.white);
text(s2,"They need repeatability.",92,410,900,110,72,"Extra Bold",C.pink);
const pains=["Great output trapped in one chat","No shared context or standards","No evidence trail or approval path","The next person starts over"];
pains.forEach((v,i)=>{ellipse(s2,104,594+i*82,18,18,i===3?C.lime:C.pink);text(s2,v,150,577+i*82,760,54,30,"Medium",C.white);});
for(let i=0;i<7;i++){rect(s2,1110+i*72,170+(i%3)*92,48,48,i===6?C.lime:C.pale,8);}
rect(s2,1096,520,530,10,C.pink,5);ellipse(s2,1586,478,92,92,C.lime);
text(s2,"isolated experiments",1098,582,410,38,22,"Semi Bold",C.pale);text(s2,"shared system",1510,582,270,38,22,"Semi Bold",C.lime,"RIGHT");
s2.speakerNotes="Ask who has had a prompt work beautifully once and fail for a colleague. A prompt library alone does not preserve evidence, output contracts, stop conditions, or review expectations.\n\n**Takeaway:** The gap is between isolated experiments and shared operating infrastructure.";

// 03 — five layers
const s3=baseSlide("03 — Five-layer foundation",C.cream);
label(s3,"THE FOUNDATION",92,72,380,C.pink);
text(s3,"Five layers turn AI output into\nan ABM operating system.",92,132,1550,190,82,"Extra Bold",C.ink);
const layers=[
  ["01","CONTEXT","what the AI should know"],["02","INSTRUCTIONS","what good work looks like"],
  ["03","TOOLS","what systems it may use"],["04","WORKFLOWS + AGENTS","how work progresses"],
  ["05","GOVERNANCE","where humans approve + improve"]
];
layers.forEach((v,i)=>{const x=98+i*330,y=790-i*92,w=286,h=150;rect(s3,x,y,w,h,i===4?C.plum:(i%2?C.pale:C.white),20);text(s3,v[0],x+22,y+18,54,40,22,"Bold",i===4?C.lime:C.pink);text(s3,v[1],x+22,y+55,w-44,35,23,"Extra Bold",i===4?C.white:C.ink);text(s3,v[2],x+22,y+100,w-44,38,18,"Medium",i===4?C.white:C.muted);});
rect(s3,1400,340,330,610,C.pink,28);rect(s3,1412,352,306,586,C.cream,22);
text(s3,"Skipping a layer does not remove complexity.\nIt pushes ambiguity into the output.",1450,420,230,410,34,"Bold",C.plum,"CENTER");
s3.speakerNotes="Walk the five layers quickly: approved context, instructions, authorized tools, workflows or agents, and governance. Every major AI environment has some version of these even when product labels differ.\n\n**Takeaway:** Skipping a layer pushes ambiguity into the output.";

// 04 — operating loop
const s4=baseSlide("04 — The operating loop",C.plum);
label(s4,"OPERATING MODEL",92,72,380,C.lime);
text(s4,"The system is a loop,\nnot a chat window.",92,150,820,230,92,"Extra Bold",C.white);
text(s4,"A chat produces an answer.\nAn operating loop improves the next one.",98,420,710,130,38,"Medium",C.pale);
const pts=[[1250,190,"CENTRAL\nBRAIN"],[1570,390,"REUSABLE\nSKILL"],[1490,735,"AUTHORIZED\nTOOLS"],[1110,810,"DRAFT\nOUTPUT"],[820,600,"HUMAN\nREVIEW"],[900,285,"LEARNING"]];
pts.forEach((v,i)=>{ellipse(s4,v[0],v[1],190,190,i===4?C.pink:(i===0?C.lime:C.cream));text(s4,v[2],v[0]+20,v[1]+58,150,75,22,"Extra Bold",i===0?C.plum:C.ink,"CENTER");});
const links=[[1420,260,150,8],[1595,580,8,160],[1300,870,190,8],[1005,700,105,8],[870,470,8,130],[1050,258,200,8]];links.forEach(v=>rect(s4,v[0],v[1],v[2],v[3],C.pink,4));
rect(s4,780,560,280,270,C.pink,16);rect(s4,796,576,248,238,C.plum,12);text(s4,"APPROVAL\nGATE",817,650,208,78,25,"Extra Bold",C.lime,"CENTER");
s4.speakerNotes="Start with shared context and reusable instructions. Authorized tools help create a draft. Human review sits before consequence, and corrections flow back into the repository.\n\n**Takeaway:** An operating loop improves the next answer.";

const gridNode=figma.currentPage.children.find(n=>n.type==="SLIDE_GRID");
if(gridNode && gridNode.children[0]){gridNode.children[0].name="01 — Why the foundation matters";ids.push(gridNode.children[0].id);}
return {createdNodeIds:ids,slideIds:[s1.id,s2.id,s3.id,s4.id],count:ids.length};
