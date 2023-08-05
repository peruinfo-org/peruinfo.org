import { getPadron } from "@/utils/sunat";



export async function GET(request: Request) {

  //const padron = await getPadron({
  //  limit: 1,
  //  offset: 0,
  //});

  const count = 500000

  const paginate = Math.ceil(count / 5000);
  
  const paginateList = Array.from({ length: paginate }, (_, i) => i + 1)

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paginateList.map((page) => `<sitemap>
      <loc>https://peruinfo.org/sitemap-empresas-${page}.xml</loc>
    </sitemap>
  `).join("\n")}
  </sitemapindex>`
  
  return new Response(body, {
    status: 200,
    headers: {
      "Chache-Control": "max-age=3600",
      "Content-Type": "application/xml",
    }
  });
}