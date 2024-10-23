/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"LinkedIn","icon":"carbon:logo-linkedin","url":"https://www.linkedin.com/in/michelepasolini/"};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/contact/linkedin.md";
				const url = "/contact/linkedin";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
