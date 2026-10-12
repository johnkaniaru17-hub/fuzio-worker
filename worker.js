export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({status:"ok", app:"Fuzio LIVE"}), {
        headers:{"content-type":"application/json"}
      });
    }
    if (url.pathname === "/social") {
      return new Response(JSON.stringify({message:"Fuzio Social API ready"}), {
        headers:{"content-type":"application/json"}
      });
    }
    return new Response("Fuzio Worker LIVE 🚀 - Try /health", {status:200});
  }
}
