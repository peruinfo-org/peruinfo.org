import { getPadron } from "@/utils/sunat";
import slugify from "slugify";

export async function GET(request: Request, context: { params: { slug: string } }) {
  
  const slug = context.params.slug.split('.xml')[0]
  const page = parseInt(slug.split('-')[2])

  const padron = await getPadron({
    limit: 10000,
    offset: (page - 1) * 10000,
  });


  const body = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
    xmlns:xhtml="http://www.w3.org/1999/xhtml" 
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${padron.items.map((empresa: any) => `<url>
      <loc>https://peruinfo.org/empresas/${slugify(empresa.razonSocial)}-${empresa.ruc}</loc>
      <lastmod>${empresa.fechaActualizacion}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`).join("\n")}
  </urlset>`

  return new Response(body, {
    status: 200,
    headers: {
      "Chache-Control": "max-age=86400",
      "Content-Type": "application/xml",
    }
  });
}
