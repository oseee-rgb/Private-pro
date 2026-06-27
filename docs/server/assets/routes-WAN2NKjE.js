import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/portrait.jpg
var portrait_default = "/Private-pro/assets/portrait-C_lWOeV1.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground font-[Inter]",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Stats, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Experience, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(Education, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
var display = "font-[Fraunces]";
function Nav() {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 py-4 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: `${display} text-lg tracking-tight`,
					children: ["Afrose", /* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "."
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden md:flex gap-8 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#about",
							className: "hover:text-foreground transition",
							children: "About"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#work",
							className: "hover:text-foreground transition",
							children: "Work"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#skills",
							className: "hover:text-foreground transition",
							children: "Skills"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "hover:text-foreground transition",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ jsx("a", {
					href: "#contact",
					className: "text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition",
					children: "Get in touch"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		id: "top",
		className: "mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "uppercase tracking-[0.25em] text-xs text-primary mb-6",
						children: "Portfolio · 2026"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: `${display} text-5xl md:text-7xl leading-[0.95] tracking-tight`,
						children: [
							"Turning ideas into ",
							/* @__PURE__ */ jsx("em", {
								className: "text-primary not-italic font-medium",
								children: "impact"
							}),
							" through ",
							/* @__PURE__ */ jsx("em", {
								className: "italic text-primary",
								children: "creativity"
							}),
							", strategy, and empathy."
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed",
						children: [
							"I'm ",
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground font-medium text-nowrap",
								children: "Saleha Afrose"
							}),
							" — a curious learner, creative thinker, and people-focused problem solver. Whether creating digital experiences, coordinating projects, or supporting community initiatives, I'm driven by a desire to turn ideas into meaningful impact and create value that matters."
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx("a", {
							href: "#work",
							className: "px-5 py-3 rounded-full bg-foreground text-background text-sm hover:opacity-90 transition",
							children: "View experience →"
						}), /* @__PURE__ */ jsx("a", {
							href: "mailto:Afrozbithyy02@gmail.com",
							className: "px-5 py-3 rounded-full border border-border text-sm hover:bg-secondary transition",
							children: "Afrozbithyy02@gmail.com"
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute -inset-4 bg-accent/40 rounded-[2rem] rotate-3",
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("img", {
							src: portrait_default,
							alt: "Saleha Afrose",
							width: 896,
							height: 1152,
							className: "relative rounded-[2rem] w-full object-cover shadow-2xl"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-5 -left-5 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "Currently"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm font-medium",
								children: "Project Executive @ Chalkboard"
							})]
						})
					]
				})
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border bg-secondary/40",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8",
			children: [
				{
					value: "1,500+",
					label: "students counselled on study-abroad & scholarships"
				},
				{
					value: "313M",
					label: "monthly content views generated"
				},
				{
					value: "112K",
					label: "followers grown in one month"
				},
				{
					value: "25+",
					label: "NGO partners coordinated with UNFPA"
				}
			].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: `${display} text-4xl md:text-5xl text-primary`,
				children: s.value
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground leading-snug",
				children: s.label
			})] }, s.label))
		})
	});
}
function About() {
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "md:col-span-4",
			children: [/* @__PURE__ */ jsx("p", {
				className: "uppercase tracking-[0.25em] text-xs text-primary",
				children: "About"
			}), /* @__PURE__ */ jsx("h2", {
				className: `${display} text-4xl md:text-5xl mt-3 leading-tight`,
				children: "Cross-sector, by design."
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "md:col-span-8 text-lg leading-relaxed text-muted-foreground space-y-5",
			children: /* @__PURE__ */ jsx("p", { children: "My journey spans marketing, project coordination, human resources, community engagement, and emerging UX design. From supporting youth-focused initiatives at UNFPA to managing HR operations, creating digital content, and exploring user-centered design, I've built a diverse skill set grounded in adaptability and continuous learning. I enjoy connecting ideas, people, and strategy to create meaningful outcomes. What I bring today is a strong eye for detail, human-centered thinking, and the curiosity to learn, contribute, and grow across different environments." })
		})]
	});
}
var roles = [
	{
		year: "2026 — Present",
		title: "Project Executive",
		org: "Chalkboard Communications Ltd.",
		meta: "Digital agency & online learning platform",
		bullets: [
			"Coordinate end-to-end delivery of digital campaigns and creative pipelines.",
			"Oversee social media management, visual design, and operational workflows against client KPIs.",
			"Collaborate across design, content, and operations to ship on quality and on time."
		]
	},
	{
		year: "2025 — 2026",
		title: "Executive Admin & HR Officer",
		org: "Edumax Consultancy & IELTS Center",
		meta: "International education consultancy · Noakhali",
		bullets: [
			"Counselled 1,500+ students on international admissions, scholarships, and IELTS prep.",
			"Managed full-cycle HR — recruitment, onboarding, compliance, and staff coordination.",
			"Designed digital and offline marketing campaigns driving measurable enrolment growth."
		]
	},
	{
		year: "2024 — 2025",
		title: "Social Media Manager (Freelance)",
		org: "Somoy TV Football Journalist",
		meta: "Facebook page · freelance digital role",
		bullets: [
			"Grew the page to 112,000 followers within a single month.",
			"Generated 313M monthly views; single-post peak of 8M views.",
			"Owned the full content lifecycle — creation, scheduling, engagement, analytics."
		]
	},
	{
		year: "2023 — 2024",
		title: "District Coordinator — Youth Programs",
		org: "UNFPA Youth Forum",
		meta: "United Nations Population Fund · Noakhali",
		bullets: [
			"Directed district-level programs on SRHR, GBV prevention, and climate justice.",
			"Coordinated 25+ NGO members and volunteers across Noakhali.",
			"Delivered workshops and outreach reaching hundreds of young beneficiaries."
		]
	},
	{
		year: "2023",
		title: "Youth Representative — SGBV Advocacy",
		org: "FPAB & IPPF",
		meta: "International Planned Parenthood Federation",
		bullets: [
			"Represented Bangladeshi youth at IPPF's global 16 Days of Activism.",
			"Delivered a public address on youth-led SGBV prevention initiatives.",
			"Produced video content for International Youth Day."
		]
	},
	{
		year: "Feb 2025",
		title: "Research Assistant",
		org: "Helios Consultancy",
		meta: "Short-term contract",
		bullets: ["Conducted qualitative data collection and field interviews.", "Contributed to analytical research report preparation."]
	}
];
function Experience() {
	return /* @__PURE__ */ jsx("section", {
		id: "work",
		className: "bg-secondary/30 border-y border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between mb-14",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "uppercase tracking-[0.25em] text-xs text-primary",
					children: "Selected Work"
				}), /* @__PURE__ */ jsx("h2", {
					className: `${display} text-4xl md:text-5xl mt-3`,
					children: "Experience"
				})] }), /* @__PURE__ */ jsx("p", {
					className: "hidden md:block text-sm text-muted-foreground max-w-xs text-right",
					children: "Six roles across marketing, HR, UX, and UN-affiliated youth development."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-px",
				children: roles.map((r, i) => /* @__PURE__ */ jsxs("article", {
					className: "group grid md:grid-cols-12 gap-6 py-8 border-t border-border first:border-t-0 hover:bg-background/60 transition px-2 -mx-2 rounded-lg",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "md:col-span-3 text-sm text-muted-foreground",
							children: r.year
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-4",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: `${display} text-2xl leading-tight`,
									children: r.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-primary text-sm mt-1",
									children: r.org
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: r.meta
								})
							]
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "md:col-span-5 space-y-2 text-muted-foreground",
							children: r.bullets.map((b, j) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx("span", { className: "text-primary mt-2 size-1.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: b })]
							}, j))
						})
					]
				}, i))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ jsxs("section", {
		id: "projects",
		className: "mx-auto max-w-6xl px-6 py-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-end justify-between mb-14",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "uppercase tracking-[0.25em] text-xs text-primary",
				children: "Case Study"
			}), /* @__PURE__ */ jsx("h2", {
				className: `${display} text-4xl md:text-5xl mt-3`,
				children: "Featured project"
			})] }), /* @__PURE__ */ jsx("p", {
				className: "hidden md:block text-sm text-muted-foreground max-w-xs text-right",
				children: "A concept project exploring how design can drive real-world climate action."
			})]
		}), /* @__PURE__ */ jsxs("article", {
			className: "relative overflow-hidden rounded-3xl border border-border bg-card",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute -top-24 -right-24 size-72 rounded-full bg-accent/40 blur-3xl",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative grid md:grid-cols-12 gap-10 p-8 md:p-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-7 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground",
										children: "UX Concept Project"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground",
										children: "Google UX Design Certificate"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground",
										children: "In progress"
									})
								]
							}),
							/* @__PURE__ */ jsxs("h3", {
								className: `${display} text-3xl md:text-5xl leading-tight`,
								children: ["Climate Awareness ", /* @__PURE__ */ jsx("em", {
									className: "text-primary not-italic",
									children: "Mobile App"
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground leading-relaxed",
								children: [
									"A UX design challenge focused on encouraging ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "sustainable behavior"
									}),
									" and increasing ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "climate awareness"
									}),
									". The concept explores how a mobile app can help users learn about environmental issues, track eco-friendly habits, set sustainability goals, and make informed choices in their daily lives."
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "uppercase tracking-[0.2em] text-[11px] text-primary mb-3",
								children: "Why this project"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground leading-relaxed",
								children: [
									"As someone drawn to ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "sustainability"
									}),
									", ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "youth engagement"
									}),
									", and ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "social impact"
									}),
									", I wanted to explore how digital products can encourage positive environmental action — turning awareness into everyday habit."
								]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "uppercase tracking-[0.2em] text-[11px] text-primary mb-3",
								children: "Objectives"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-2 text-muted-foreground",
								children: [
									"Encourage sustainable, eco-friendly daily habits",
									"Make climate science approachable and actionable",
									"Empower users to set and track personal sustainability goals",
									"Foster informed decision-making through gentle nudges"
								].map((o) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-2 size-1.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: o })]
								}, o))
							})] })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-5 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-background p-6",
								children: [/* @__PURE__ */ jsx("p", {
									className: "uppercase tracking-[0.2em] text-[11px] text-primary mb-3",
									children: "My role"
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-2 text-sm",
									children: [
										"Problem Definition",
										"User-Centered Ideation",
										"UX Research Fundamentals",
										"Concept Development"
									].map((r) => /* @__PURE__ */ jsxs("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ jsx("span", { className: "mt-1.5 size-1.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: r })]
									}, r))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-background p-6",
								children: [/* @__PURE__ */ jsx("p", {
									className: "uppercase tracking-[0.2em] text-[11px] text-primary mb-3",
									children: "Skills applied"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"Design Thinking",
										"User-Centered Design",
										"Empathy Mapping",
										"Persona Development",
										"Problem Solving",
										"UX Research Fundamentals"
									].map((s) => /* @__PURE__ */ jsx("span", {
										className: "text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border",
										children: s
									}, s))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6",
								children: [/* @__PURE__ */ jsx("p", {
									className: "uppercase tracking-[0.2em] text-[11px] text-primary mb-2",
									children: "What's next"
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: [
										"Currently being expanded into a full UX case study with ",
										/* @__PURE__ */ jsx("span", {
											className: "text-foreground",
											children: "wireframes"
										}),
										", ",
										/* @__PURE__ */ jsx("span", {
											className: "text-foreground",
											children: "user flows"
										}),
										", and an interactive ",
										/* @__PURE__ */ jsx("span", {
											className: "text-foreground",
											children: "prototype"
										}),
										"."
									]
								})]
							})
						]
					})]
				})
			]
		})]
	});
}
var skillGroups = [
	{
		title: "UX & Design",
		items: [
			"UX Design",
			"Design Thinking",
			"Empathy Mapping",
			"User Research",
			"Canva",
			"Adobe Lightroom",
			"CapCut",
			"Visual Communication"
		]
	},
	{
		title: "Digital Marketing & Content",
		items: [
			"Social Media Marketing",
			"Content Strategy",
			"Digital Storytelling",
			"Brand Communication",
			"Community Management",
			"Audience Growth",
			"Social Media Analytics"
		]
	},
	{
		title: "Professional & Administrative",
		items: [
			"HR Administration",
			"Project Coordination",
			"Student Counselling",
			"Education Advising",
			"Event Management",
			"Stakeholder Engagement",
			"Public Speaking"
		]
	},
	{
		title: "Languages",
		items: [
			"Bangla (Native)",
			"English (Fluent)",
			"Hindi (Conversational)"
		]
	}
];
function Skills() {
	return /* @__PURE__ */ jsxs("section", {
		id: "skills",
		className: "mx-auto max-w-6xl px-6 py-24",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "uppercase tracking-[0.25em] text-xs text-primary",
				children: "Toolkit"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: `${display} text-4xl md:text-5xl mt-3 mb-14`,
				children: "Skills & capabilities"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 gap-8",
				children: skillGroups.map((g) => /* @__PURE__ */ jsxs("div", {
					className: "border border-border rounded-2xl p-7 bg-card",
					children: [/* @__PURE__ */ jsx("h3", {
						className: `${display} text-xl mb-4`,
						children: g.title
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2",
						children: g.items.map((it) => /* @__PURE__ */ jsx("span", {
							className: "text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border",
							children: it
						}, it))
					})]
				}, g.title))
			})
		]
	});
}
function Education() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-secondary/30 border-y border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 py-24",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "uppercase tracking-[0.25em] text-xs text-primary",
					children: "Credentials"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: `${display} text-4xl md:text-5xl mt-3 mb-14`,
					children: "Education & certifications"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 gap-5",
					children: [
						{
							title: "BBA — Marketing",
							org: "Noakhali Government College",
							year: "2021 — 2026 (expected)"
						},
						{
							title: "Start the UX Design Process: Empathize, Define & Ideate",
							org: "Google · Coursera — part of the Google UX Design Certificate (in progress)",
							year: "2026"
						},
						{
							title: "Diploma in Basic Office Programming",
							org: "Bangladesh Technical Education Board · A+ Grade",
							year: "6-month program"
						},
						{
							title: "UNFPA National Capacity-Building Program",
							org: "UNFPA Bangladesh",
							year: "2023 — 2024"
						},
						{
							title: "HSC — Business Studies",
							org: "Noakhali Government Women's College · Cumilla Board",
							year: "2020"
						}
					].map((it) => /* @__PURE__ */ jsxs("div", {
						className: "bg-background border border-border rounded-2xl p-6 flex flex-col",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: it.year
							}),
							/* @__PURE__ */ jsx("h3", {
								className: `${display} text-xl mt-2 leading-snug`,
								children: it.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-primary mt-1",
								children: it.org
							})
						]
					}, it.title))
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "mx-auto max-w-6xl px-6 py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-12 gap-10 items-end",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-8",
				children: [/* @__PURE__ */ jsx("p", {
					className: "uppercase tracking-[0.25em] text-xs text-primary",
					children: "Let's talk"
				}), /* @__PURE__ */ jsxs("h2", {
					className: `${display} text-5xl md:text-7xl mt-4 leading-[0.95]`,
					children: [
						"Open to ",
						/* @__PURE__ */ jsx("em", {
							className: "text-primary",
							children: "UX design, marketing, and consulting"
						}),
						" opportunities — with agencies, startups, and remote teams worldwide."
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "md:col-span-4 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "mailto:Afrozbithyy02@gmail.com",
						className: "block px-5 py-4 rounded-2xl bg-foreground text-background hover:opacity-90 transition",
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-xs opacity-60",
							children: "Email"
						}), "Afrozbithyy02@gmail.com"]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-5 py-4 rounded-2xl border border-border",
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-xs text-muted-foreground",
							children: "Phone"
						}), "+880 1706 293460"]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-5 py-4 rounded-2xl border border-border",
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-xs text-muted-foreground",
							children: "Based in"
						}), "\xA0Bangladesh . Available for remote collaboration worldwide"]
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground",
			children: /* @__PURE__ */ jsxs("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Saleha Afrose. All rights reserved."
			] })
		})
	});
}
//#endregion
export { Index as component };
