/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = "<p>The Tactical Emergency Medical Technician (TEMT) certification trains healthcare professionals to provide advanced medical care in tactical and high-risk environments, such as law enforcement operations, military settings, or emergency response scenarios. TEMTs are trained to rapidly assess and treat traumatic injuries, stabilize patients in adverse conditions, and closely collaborate with tactical and rescue teams to ensure the safety and well-being of victims.</p>";

				const frontmatter = {"title":"Certified Tactical Emergency Medical Technician (TEMT)","org":"123 Main Street, Los Angeles","tags":["Tactical Medicine","First Aid Training","Critical Care","Triage Protocol"],"url":"http://akazedu.edu/seaghi","date":1992};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/certificates/backend2022.md";
				const url = "/certificates/backend2022";
				function rawContent() {
					return "\r\nThe Tactical Emergency Medical Technician (TEMT) certification trains healthcare professionals to provide advanced medical care in tactical and high-risk environments, such as law enforcement operations, military settings, or emergency response scenarios. TEMTs are trained to rapidly assess and treat traumatic injuries, stabilize patients in adverse conditions, and closely collaborate with tactical and rescue teams to ensure the safety and well-being of victims.\r\n";
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

const page = () => _page;

export { page };
