/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"MASTER DEGREE IN ECONOMICS","location":"Milan","url":"https://www.unicatt.it/","institute":"Università Cattolica del Sacro Cuore di Milano Market and strategic Business","date":"2010-2013","tags":["US market","Strategic Planning","Strategic Economics","Master Of Finance"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/studies/studie1 .md";
				const url = "/studies/studie1 ";
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
