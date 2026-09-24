export const dynamic='force-dynamic';
export async function GET(){
 const url=process.env.BATCHES_API_URL||'https://nt.studybeepro.site/batches.json';
 const r=await fetch(url,{cache:'no-store',headers:{Accept:'application/json'}});
 const body=await r.text();
 return new Response(body,{status:r.status,headers:{'content-type':r.headers.get('content-type')||'application/json'}});
}
