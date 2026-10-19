
let currentLang = 'en';

const T = {
  foot_hiring: { en: "We're hiring — open positions", pt: 'Estamos a recrutar — vagas abertas' },
  hc_title: { en: 'HomeCare — for owners who are often away', pt: 'HomeCare — para proprietários que estão muitas vezes fora' },
  hc_sub: { en: 'Regular inspections, maintenance and help in an emergency.', pt: 'Inspeções regulares, manutenção e ajuda em emergências.' },
  hc_ess: { en: 'Second homes and properties left empty', pt: 'Segundas habitações e imóveis desocupados' },
  hc_act: { en: 'Holiday rentals (Alojamento Local) that must stay guest-ready', pt: 'Alojamento Local que tem de estar sempre pronto para hóspedes' },
  hc_gq: { en: 'Quintas, vineyards and heritage estates', pt: 'Quintas, vinhas e propriedades patrimoniais' },
  hc_mo: { en: '/month', pt: '/mês' },
  hc_details: { en: 'See full plan details', pt: 'Ver todos os detalhes dos planos' },
  hc_ask: { en: 'Ask which plan fits my property', pt: 'Perguntar que plano serve o meu imóvel' },
  hc_wa_msg: { en: 'Hello BTS, which HomeCare plan fits my property?\nLocation: \nType of property: ', pt: 'Olá BTS, que plano HomeCare serve o meu imóvel?\nLocalização: \nTipo de imóvel: ' },
  rs_wa_msg: { en: 'BTS Resolve — I have a problem at my property and would like a price.\nLocation: \nProblem: \n(I will attach photos.)', pt: 'BTS Resolve — tenho um problema no meu imóvel e gostaria de um preço.\nLocal: \nProblema: \n(Vou anexar fotografias.)' },
  cmp_emerg_row: { en: 'Emergency arrival on site', pt: 'Chegada ao local em emergência' },
  cmp_emerg_act: { en: '2–4 h (7 days)', pt: '2–4 h (7 dias)' },
  cmp_emerg_gq: { en: '2–4 h, priority (24/7)', pt: '2–4 h, prioritária (24/7)' },
  sla_def: { en: '<strong>How emergency response works.</strong> “Response” means a technician arriving at your property — not just a reply. The clock starts when you report the emergency to us by phone or WhatsApp — an email does not start it, so in an emergency always call or send a WhatsApp message. It applies to properties in our service area (Douro Valley, Aveiro, Porto, Braga and Viseu). The exact arrival time, between 2 and 4 hours, is agreed in your contract according to where the property is. Essential Care: a technician visits on the next business day.', pt: '<strong>Como funciona a resposta a emergências.</strong> «Resposta» significa um técnico a chegar ao seu imóvel — não apenas uma resposta à mensagem. O prazo começa a contar quando nos comunica a emergência por telefone ou WhatsApp — um email não conta, por isso numa emergência ligue sempre ou envie mensagem por WhatsApp. Aplica-se a imóveis na nossa área de serviço (Vale do Douro, Aveiro, Porto, Braga e Viseu). O tempo exato de chegada, entre 2 e 4 horas, é acordado no seu contrato conforme a localização do imóvel. Essential Care: um técnico desloca-se no próximo dia útil.' },
  wa_step: { en: '<b>Not sent yet.</b> 1. Tap the button — WhatsApp opens with your message already written. 2. Press <b>Send</b> in WhatsApp. Only then does your request reach us.', pt: '<b>Ainda não foi enviado.</b> 1. Carregue no botão — o WhatsApp abre com a mensagem já escrita. 2. Carregue em <b>Enviar</b> no WhatsApp. Só então o pedido nos chega.' },
  wa_step_cv: { en: '<b>Not sent yet.</b> 1. Tap the button — WhatsApp opens with your details already written. 2. Attach your CV. 3. Press <b>Send</b> in WhatsApp. Only then does your application reach us.', pt: '<b>Ainda não foi enviado.</b> 1. Carregue no botão — o WhatsApp abre com os seus dados já escritos. 2. Anexe o CV. 3. Carregue em <b>Enviar</b> no WhatsApp. Só então a candidatura nos chega.' },
  wa_step_optional: { en: 'Optional — your request is already with us. WhatsApp is only for sending photos or a faster chat.', pt: 'Opcional — o seu pedido já nos chegou. O WhatsApp serve apenas para enviar fotos ou falar mais depressa.' },
  wa_btn_pending: { en: 'Open WhatsApp, then press Send', pt: 'Abrir o WhatsApp e carregar em Enviar' },
  wa_btn_optional: { en: 'Also message us on WhatsApp', pt: 'Escrever-nos também no WhatsApp' },
  lbl_call: { en: 'Calls', pt: 'Chamadas' },
  lbl_msg: { en: 'Messages (WhatsApp)', pt: 'Mensagens (WhatsApp)' },
  lbl_careers: { en: 'Careers &amp; CVs (WhatsApp)', pt: 'Candidaturas e CV (WhatsApp)' },
  mbar_wa_msg: { en: "Hello BTS, I'd like a quote for my property. ", pt: 'Olá BTS, gostaria de um orçamento para o meu imóvel. ' },
  mbar_call: { en: 'Call', pt: 'Ligar' },
  mbar_quote: { en: 'Free quote', pt: 'Orçamento grátis' },
  ft_care_prices: { en: 'Essential €99 · Active Host €249 · Grand Quinta €499 per month', pt: 'Essential €99 · Active Host €249 · Grand Quinta €499 por mês' },
  cr_j3_status: { en: 'Urgent · immediate start', pt: 'Urgente · início imediato' },
  cr_j3_sub: { en: 'Drywall &amp; LSF installer', pt: 'Gesso cartonado e estruturas LSF' },
  cr_j3_loc: { en: 'Greater Porto — Maia · Valongo', pt: 'Grande Porto — Maia · Valongo' },
  cr_j3_type: { en: 'Employment or subcontract', pt: 'Contrato ou subempreitada' },
  cr_j3_exp: { en: 'Drywall / LSF experience', pt: 'Experiência em pladur / LSF' },
  cr_j3_home: { en: 'Accommodation available', pt: 'Possibilidade de alojamento' },
  cr_j3_do: { en: '<li>Large sites — about 1,300 m² of walls and ceilings, incl. Panattoni Park (Campo, Valongo)</li><li>LSF partition walls with standard and moisture-resistant plasterboard (double 15 mm boards, rock wool core)</li><li>Fire-rated walls in PROMATECT® 100X board with mineral wool insulation</li><li>Independent ceilings in PROMATECT® 100X calcium silicate boards with rock wool</li>', pt: '<li>Obras de grande dimensão — cerca de 1.300 m² de paredes e tetos, incl. Panattoni Park (Campo, Valongo)</li><li>Paredes divisórias em LSF com gesso cartonado standard e hidrófugo (placas duplas de 15 mm, núcleo em lã de rocha)</li><li>Paredes corta-fogo em placa PROMATECT® 100X com isolamento em lã mineral</li><li>Tetos independentes em placas de silicato de cálcio PROMATECT® 100X com lã de rocha</li>' },
  cr_j3_need: { en: '<li>Experience installing plasterboard (pladur) and LSF framing</li><li>Experience with PROMAT fire-protection systems is a plus</li><li>Precision, quality finishing and responsibility</li><li>Available to start immediately</li><li>Individual installers, teams and subcontractors welcome</li>', pt: '<li>Experiência em montagem de gesso cartonado / pladur e estruturas LSF</li><li>Experiência com sistemas de proteção contra incêndio (PROMAT) — valorizada</li><li>Rigor, qualidade de acabamento e responsabilidade</li><li>Disponibilidade imediata</li><li>Contratação direta, equipas e subempreiteiros</li>' },
  cr_opt_j3: { en: 'Montador de Pladur (Drywall installer)', pt: 'Montador de Pladur / Gesso Cartonado' },
  cr_j4_sub: { en: 'Rebar fixer · Steel fixer', pt: 'Armaduras para betão armado' },
  cr_j4_exp: { en: 'Rebar experience', pt: 'Experiência em armaduras' },
  cr_j4_do: { en: '<li>Cut and bend steel reinforcement bars</li><li>Assemble and tie steel reinforcement for structural elements</li><li>Read and follow reinforcement drawings</li><li>Place spacers and keep the required concrete cover</li>', pt: '<li>Corte e dobragem de armaduras de aço</li><li>Montagem e atadura de armaduras para elementos estruturais</li><li>Interpretação de desenhos de armaduras</li><li>Colocação de espaçadores e garantia dos recobrimentos</li>' },
  cr_j4_need: { en: '<li>Proven experience as a rebar fixer (ferrageiro / armador de ferro)</li><li>Able to read reinforcement drawings</li><li>Safe work with cutting and bending tools and at height</li><li>Accurate, punctual team player; driving licence is a plus</li>', pt: '<li>Experiência comprovada como ferrageiro / armador de ferro</li><li>Capacidade de interpretar desenhos de armaduras</li><li>Trabalho seguro com ferramentas de corte e dobragem e em altura</li><li>Rigor, pontualidade e espírito de equipa; carta de condução é uma vantagem</li>' },
  cr_opt_j4: { en: 'Ferrageiro (Rebar fixer)', pt: 'Ferrageiro / Armador de Ferro' },
  tips_open: { en: 'Tips for owners', pt: 'Dicas para proprietários' },
  swipe_hint: { en: 'Swipe to see more →', pt: 'Deslize para ver mais →' },
  up_add_photos: { en: 'Add photos', pt: 'Adicionar fotos' },
  up_add_cv: { en: 'Attach your CV', pt: 'Anexar o CV' },
  up_files: { en: 'files selected', pt: 'ficheiros selecionados' },
  ft_more_fields: { en: '+ Email and photos (optional)', pt: '+ Email e fotos (opcional)' },
  pg10: { en: 'Room finished and handed back clean', pt: 'Divisão concluída e entregue limpa' },
  pg10_tag: { en: 'Interiors', pt: 'Interiores' },
  hx_ai: { en: 'Ask our AI assistant', pt: 'Pergunte ao assistente' },
  pg_label: { en: 'Our work', pt: 'O nosso trabalho' },
  pg_title: { en: 'Recent work by our team', pt: 'Trabalhos recentes da nossa equipa' },
  pg_sub: { en: 'Photos from our own projects in Northern Portugal — new builds, stonework, pools and interiors.', pt: 'Fotos das nossas próprias obras no Norte de Portugal — construção nova, alvenaria de pedra, piscinas e interiores.' },
  pg1: { en: 'Infinity pool over the Douro valley', pt: 'Piscina infinita sobre o Vale do Douro' },
  pg1_tag: { en: 'Pools', pt: 'Piscinas' },
  pg2: { en: 'Schist stone walls laid by hand', pt: 'Muros de xisto feitos à mão' },
  pg2_tag: { en: 'Stonework', pt: 'Alvenaria de pedra' },
  pg3: { en: 'New window opening in an old schist wall', pt: 'Novo vão de janela numa parede de xisto' },
  pg3_tag: { en: 'Rehabilitation', pt: 'Reabilitação' },
  pg4: { en: 'Terraced houses with stone-clad pillars', pt: 'Moradias em banda com pilares revestidos a pedra' },
  pg4_tag: { en: 'New construction', pt: 'Construção nova' },
  pg5: { en: 'Steel window frame above a stone wall', pt: 'Moldura de janela em aço sobre parede de pedra' },
  pg5_tag: { en: 'Façades', pt: 'Fachadas' },
  pg6: { en: 'Walls repainted by our team', pt: 'Paredes pintadas pela nossa equipa' },
  pg6_tag: { en: 'Interiors', pt: 'Interiores' },
  pg7: { en: 'Room ready after repainting', pt: 'Quarto pronto depois da pintura' },
  pg7_tag: { en: 'Interiors', pt: 'Interiores' },
  ft_hero_eyebrow: { en: 'Northern Portugal · IMPIC licence 115511', pt: 'Norte de Portugal · Alvará IMPIC 115511' },
  ft_s1: { en: 'Licensed &amp; insured', pt: 'Licenciados e com seguro' },
  ft_s2: { en: 'Fixed written quote', pt: 'Orçamento fixo por escrito' },
  ft_s3: { en: 'English-speaking manager', pt: 'Gestor que fala inglês' },
  ft_s4: { en: 'Weekly photo updates', pt: 'Fotos semanais da obra' },
  ft_quote: { en: 'Get a free quote', pt: 'Pedir orçamento' },
  ft_small: { en: 'Small repair? BTS Resolve', pt: 'Pequena reparação? BTS Resolve' },
  ft_note1: { en: 'We build solutions', pt: 'Construímos soluções' },
  ft_svc_eyebrow: { en: 'Our services', pt: 'Os nossos serviços' },
  ft_svc_title: { en: 'Construction and renovation in Northern Portugal', pt: 'Construção e remodelação no Norte de Portugal' },
  ft_svc_sub: { en: 'From new houses to small repairs — one licensed team, one written quote.', pt: 'De moradias novas a pequenas reparações — uma equipa licenciada, um orçamento por escrito.' },
  ft_calc: { en: 'Cost in 30 seconds', pt: 'Custo em 30 segundos' },
  ft_c1_t: { en: 'New construction', pt: 'Construção de raiz' },
  ft_c1_d: { en: 'Houses built from the foundations, to a fixed written quote.', pt: 'Moradias desde a fundação, com orçamento fixo por escrito.' },
  ft_more: { en: 'Send a photo', pt: 'Enviar foto' },
  ft_c2_t: { en: 'Renovation', pt: 'Remodelações' },
  ft_c2_d: { en: 'Kitchens, bathrooms and whole interiors renovated.', pt: 'Cozinhas, casas de banho e interiores completos.' },
  ft_c3_t: { en: 'Restoration of old buildings', pt: 'Reabilitação de edifícios' },
  ft_c3_d: { en: 'Old stone houses restored while keeping their character.', pt: 'Casas antigas recuperadas, preservando o seu caráter.' },
  ft_c4_t: { en: 'Masonry &amp; structures', pt: 'Alvenaria e estruturas' },
  ft_c4_d: { en: 'Walls, concrete, foundations and retaining walls.', pt: 'Paredes, betão, fundações e muros de suporte.' },
  ft_c5_t: { en: 'Roofs &amp; waterproofing', pt: 'Telhados e impermeabilização' },
  ft_c5_d: { en: 'New roofs, repairs, gutters and drainage.', pt: 'Telhados novos, reparações, caleiras e drenagem.' },
  ft_c6_t: { en: 'BTS Resolve — small repairs', pt: 'BTS Resolve — pequenas reparações' },
  ft_c6_d: { en: 'Send a photo of the problem. We tell you the price first.', pt: 'Envie uma foto do problema. Dizemos o preço primeiro.' },
  ft_care: { en: 'Away from your property? HomeCare plans keep it checked and maintained.', pt: 'Está longe do seu imóvel? Os planos HomeCare mantêm-no vigiado e cuidado.' },
  ft_care_btn: { en: 'See plans', pt: 'Ver planos' },
  ft_note2: { en: 'Trust on every site', pt: 'Confiança em obra' },
  ft_why_eyebrow: { en: 'Why BTS, Building The Solution', pt: 'Porquê a BTS, Building The Solution' },
  ft_why_title: { en: 'Work done right. Deadlines kept.', pt: 'Obra bem feita. Prazos cumpridos.' },
  ft_why_sub: { en: 'One team follows your project from the first visit to the handover — and you always know where it stands, even from abroad.', pt: 'Uma só equipa acompanha a sua obra da primeira visita à entrega — e sabe sempre em que ponto está, mesmo no estrangeiro.' },
  ft_v1_t: { en: 'Fixed written quote', pt: 'Orçamento fixo por escrito' },
  ft_v1_d: { en: 'Fixed price for the agreed work. Anything unforeseen needs a separate written variation and your approval.', pt: 'Preço fixo para os trabalhos acordados. Qualquer imprevisto exige uma alteração escrita à parte e a sua aprovação.' },
  ft_v2_t: { en: 'Bilingual manager', pt: 'Gestor bilingue' },
  ft_v2_d: { en: 'English and Portuguese from day one.', pt: 'Inglês e português desde o primeiro dia.' },
  ft_v3_t: { en: 'Weekly photo updates', pt: 'Fotos todas as semanas' },
  ft_v3_d: { en: 'Follow the work from anywhere.', pt: 'Acompanhe a obra de qualquer lugar.' },
  ft_v4_t: { en: 'Licensed &amp; insured', pt: 'Licenciados e com seguro' },
  ft_v4_d: { en: 'IMPIC licence 115511.', pt: 'Alvará IMPIC n.º 115511.' },
  ft_q_eyebrow: { en: 'Request a quote', pt: 'Peça o seu orçamento' },
  ft_q_title: { en: 'Get a quote for your project', pt: 'Peça um orçamento para a sua obra' },
  ft_q_sub: { en: 'Fill in the form and we will contact you with a tailored quote.', pt: 'Preencha o formulário e entramos em contacto consigo com um orçamento à medida.' },
  ft_sel_t: { en: 'Free visit &amp; quote', pt: 'Visita e orçamento' },
  ft_sel_d: { en: 'No obligation. Video call if you are abroad.', pt: 'Sem compromisso. Videochamada se estiver fora.' },
  ft_p_eyebrow: { en: 'Simple and clear', pt: 'Simples e sem complicações' },
  ft_p_title: { en: 'How we work', pt: 'Como trabalhamos' },
  ft_p_sub: { en: 'From the first contact to the finished work, we handle everything so the process stays simple and transparent.', pt: 'Do primeiro contacto ao trabalho concluído, tratamos de tudo para que o processo seja simples e transparente.' },
  ft_st1_t: { en: 'First contact', pt: 'Contacto inicial' },
  ft_st1_d: { en: 'Form, WhatsApp or phone — we talk about your property.', pt: 'Formulário, WhatsApp ou telefone — falamos sobre o seu imóvel.' },
  ft_st2_t: { en: 'Visit &amp; assessment', pt: 'Visita e avaliação' },
  ft_st2_d: { en: 'On site, or by video call if you are abroad.', pt: 'No local, ou por videochamada se estiver fora.' },
  ft_st3_t: { en: 'Detailed proposal', pt: 'Proposta detalhada' },
  ft_st3_d: { en: 'A fixed written quote with timing and specifications.', pt: 'Orçamento fixo por escrito, com prazos e especificações.' },
  ft_st4_t: { en: 'Execution', pt: 'Execução da obra' },
  ft_st4_d: { en: 'We build, with weekly photo updates until handover.', pt: 'Construímos, com fotos semanais até à entrega.' },
  ft_d_eyebrow: { en: 'Tips and advice', pt: 'Dicas e conselhos' },
  ft_d_title: { en: 'Advice for your project', pt: 'Conselhos para a sua obra' },
  ft_d_sub: { en: 'Practical advice to look after your property and know when to call a professional.', pt: 'Conselhos práticos para cuidar da sua casa e saber quando chamar um profissional.' },
  ft_t1_tag: { en: 'Planning', pt: 'Planeamento' },
  ft_t1_t: { en: 'Define the brief before you start', pt: 'Defina bem o programa antes de começar' },
  ft_t1_d: { en: 'A clear plan avoids expensive changes during the work.', pt: 'Um projeto claro evita alterações dispendiosas durante a obra.' },
  ft_talk: { en: 'Talk to us', pt: 'Falar connosco' },
  ft_t2_tag: { en: 'Budget', pt: 'Orçamento' },
  ft_t2_t: { en: 'Keep a margin for the unexpected', pt: 'Reserve uma margem para imprevistos' },
  ft_t2_d: { en: 'Old buildings can hide problems behind walls and floors. If we find one, nothing changes without a separate written variation and your approval — a small reserve lets you decide calmly.', pt: 'Os edifícios antigos podem esconder problemas atrás de paredes e pavimentos. Se encontrarmos algum, nada muda sem uma alteração escrita à parte e a sua aprovação — uma pequena reserva permite-lhe decidir com calma.' },
  ft_t3_tag: { en: 'Materials', pt: 'Materiais' },
  ft_t3_t: { en: 'Invest in foundations and structure', pt: 'Invista na qualidade das fundações e estrutura' },
  ft_t3_d: { en: 'What you cannot see matters most for durability.', pt: 'O que não se vê é o que mais importa para a durabilidade.' },
  ft_cta_t: { en: 'Ready to start your project?', pt: 'Pronto para começar a sua obra?' },
  ft_cta_d: { en: 'Talk to us today and get a free, no-obligation quote.', pt: 'Fale connosco hoje e receba um orçamento sem compromisso.' },
  ft_call: { en: 'Call 933 255 248', pt: 'Ligar 933 255 248' },
  nav_home: { en: 'Home', pt: 'Início' },
  ft_callus: { en: 'Call us', pt: 'Ligue-nos' },
  ft_ph_name: { en: 'Name *', pt: 'Nome *' },
  ft_ph_phone: { en: 'Phone / WhatsApp *', pt: 'Telefone / WhatsApp *' },
  ft_ph_email: { en: 'Email', pt: 'Email' },
  ft_ph_desc: { en: 'Tell us a little about the work…', pt: 'Conte-nos um pouco sobre o trabalho…' },
  dirs_title: { en: 'What we do', pt: 'O que fazemos' },
  dir1_t: { en: 'Renovation &amp; restoration', pt: 'Remodelação e reabilitação' },
  dir1_d: { en: 'Houses and flats renovated from structure to finish.', pt: 'Casas e apartamentos remodelados da estrutura aos acabamentos.' },
  dir2_t: { en: 'New construction', pt: 'Construção nova' },
  dir2_d: { en: 'New houses built to a fixed written quote.', pt: 'Moradias novas com orçamento fixo por escrito.' },
  dir3_t: { en: 'BTS Resolve — small repairs', pt: 'BTS Resolve — pequenas reparações' },
  dir3_d: { en: 'Send a photo of the problem. We tell you the price first.', pt: 'Envie uma foto do problema. Dizemos o preço primeiro.' },
  dir_more: { en: 'Learn more →', pt: 'Saber mais →' },
  why_title: { en: 'Why BTS', pt: 'Porquê a BTS' },
  works_title: { en: 'Our services', pt: 'Os nossos serviços' },
  works_sub: { en: 'Renovation, new builds, pools and roofs in Northern Portugal — always with a fixed written quote.', pt: 'Remodelações, construção nova, piscinas e telhados no Norte de Portugal — sempre com orçamento fixo por escrito.' },
  works_cta_t: { en: 'Tell us about your property', pt: 'Fale-nos do seu imóvel' },
  f_phone_req: { en: 'Phone / WhatsApp *', pt: 'Telefone / WhatsApp *' },
  f_need: { en: 'What do you need?', pt: 'De que precisa?' },
  buddy_text: { en: "Hi! I'm the BTS assistant. Ask me about prices, timing or a repair.", pt: "Olá! Sou o assistente da BTS. Pergunte-me sobre preços, prazos ou uma reparação." },
  need_title: { en: "What do you need?", pt: "De que precisa?" },
  need1_t: { en: "Fix something now", pt: "Resolver um problema já" },
  need1_d: { en: "Small repairs and urgent property problems.", pt: "Pequenas reparações e problemas urgentes." },
  need2_t: { en: "Renovate my property", pt: "Remodelar a minha casa" },
  need2_d: { en: "Renovations, restoration and larger works.", pt: "Remodelações, restauro e obras maiores." },
  need3_t: { en: "Maintain my property", pt: "Manter a minha casa" },
  need3_d: { en: "Regular maintenance and prevention.", pt: "Manutenção regular e prevenção." },
  need_ai: { en: "Not sure? Ask our assistant", pt: "Tem dúvidas? Pergunte ao assistente" },
  f_more: { en: "Add details (optional)", pt: "Adicionar detalhes (opcional)" },
  crl_text: { en: "Looking to work with us?", pt: "Quer trabalhar connosco?" },
  crl_link: { en: "View open positions →", pt: "Ver vagas abertas →" },
  rs_h1: { en: "Something broken at home? <span>BTS resolves it.</span>", pt: "Problema em casa? <span>A BTS resolve.</span>" },
  rs_sub: { en: "Send us a photo. We tell you what needs doing and what it costs — before anyone comes.", pt: "Envie-nos uma foto. Dizemos-lhe o que é preciso fazer e quanto custa — antes de alguém ir ao local." },
  rs_wa: { en: "Send a photo on WhatsApp", pt: "Enviar foto por WhatsApp" },
  rs_call: { en: "Call +351 933 255 248", pt: "Ligar +351 933 255 248" },
  rs_fix_t: { en: "What we fix", pt: "O que resolvemos" },
  rs_f1: { en: "Plumbing", pt: "Canalização" },
  rs_f1d: { en: "Leaks, taps, drains, toilets", pt: "Fugas, torneiras, esgotos, sanitas" },
  rs_f2: { en: "Electrical", pt: "Eletricidade" },
  rs_f2d: { en: "Sockets, lights, fuse boards", pt: "Tomadas, luzes, quadros elétricos" },
  rs_f3: { en: "Roofs", pt: "Telhados" },
  rs_f3d: { en: "Leaks, broken tiles, gutters", pt: "Infiltrações, telhas partidas, caleiras" },
  rs_f4: { en: "Painting", pt: "Pintura" },
  rs_f4d: { en: "Walls, ceilings, damp stains", pt: "Paredes, tetos, manchas de humidade" },
  rs_f5: { en: "Garden &amp; outdoor", pt: "Jardim e exterior" },
  rs_f5d: { en: "Paths, walls, small landscape works", pt: "Caminhos, muros, pequenos arranjos exteriores" },
  rs_f6: { en: "Home maintenance", pt: "Manutenção da casa" },
  rs_f6d: { en: "Doors, windows, tiles and everything else", pt: "Portas, janelas, azulejos e tudo o resto" },
  rs_how_t: { en: "How it works", pt: "Como funciona" },
  rs_s1: { en: "Send a photo", pt: "Envie uma foto" },
  rs_s1d: { en: "On WhatsApp or with the form below. Add a few words about the problem.", pt: "Por WhatsApp ou pelo formulário abaixo. Junte umas palavras sobre o problema." },
  rs_s2: { en: "We tell you the price", pt: "Dizemos-lhe o preço" },
  rs_s2d: { en: "You know what needs doing and what it costs before anyone comes.", pt: "Fica a saber o que é preciso fazer e quanto custa antes de alguém ir ao local." },
  rs_s3: { en: "Our builder fixes it", pt: "O nosso técnico resolve" },
  rs_s3d: { en: "Our own team does the work. You get an invoice.", pt: "A nossa própria equipa faz o trabalho. Recebe fatura." },
  rs_price_t: { en: "What does it cost?", pt: "Quanto custa?" },
  rs_price_d: { en: "It depends on the problem. We confirm the price after seeing your photos, before any work starts.", pt: "Depende do problema. Confirmamos o preço depois de ver as fotos, antes de começar qualquer trabalho." },
  rs_area: { en: "Douro Valley, Aveiro, Porto — tell us where the property is and we confirm.", pt: "Douro, Aveiro, Porto — diga-nos onde fica o imóvel e confirmamos." },
  rs_trust: { en: "Own team · IMPIC licence 115511 · Invoice for every job", pt: "Equipa própria · Alvará IMPIC 115511 · Fatura em todos os trabalhos" },
  rs_form_t: { en: "Or tell us here", pt: "Ou escreva-nos aqui" },
  rs_f_place: { en: "Where is the property?", pt: "Onde fica o imóvel?" },
  rs_f_desc: { en: "What is the problem? *", pt: "Qual é o problema? *" },
  rs_f_desc_ph: { en: "e.g. Water is dripping from the kitchen ceiling", pt: "ex.: Está a pingar água do teto da cozinha" },
  rs_f_photos: { en: "Photos of the problem (optional)", pt: "Fotos do problema (opcional)" },
  rs_submit: { en: "Send", pt: "Enviar" },
  rs_sent_t: { en: "Thank you — we have your request!", pt: "Obrigado — recebemos o seu pedido!" },
  rs_sent_d: { en: "We will contact you with the solution and the price. For a faster answer, send the photos on WhatsApp too.", pt: "Entramos em contacto com a solução e o preço. Para uma resposta mais rápida, envie também as fotos por WhatsApp." },
  rs_edit: { en: "← Edit my request", pt: "← Editar o meu pedido" },
  nav_resolve: { en: "Small repairs — BTS Resolve", pt: "Pequenas reparações — BTS Resolve" },
  nav_ai: { en: "Ask our AI assistant", pt: "Perguntar ao assistente de IA" },
  faq_more: { en: "Show all questions", pt: "Ver todas as perguntas" },
  // NAV
  nav_services: { en: 'Services', pt: 'Serviços' },
  nav_care: { en: 'Care Plans', pt: 'Planos de Manutenção' },
  nav_about: { en: 'About', pt: 'Sobre Nós' },
  nav_projects: { en: 'Projects', pt: 'Projetos' },
  nav_testimonials: { en: 'Testimonials', pt: 'Testemunhos' },
  nav_cta: { en: 'Free Estimate', pt: 'Orçamento Grátis' },
  nav_contact: { en: 'Contact', pt: 'Contacto' },

  // HERO
  hero_title: { en: "Renovating a Property in Portugal? <span>We Manage It for You</span>", pt: "Obras na sua casa em Portugal? <span>Nós tratamos de tudo</span>" },
  hero_sub: { en: "Fixed written quote and weekly photo updates — even if you live abroad.", pt: "Orçamento escrito e fechado, fotos todas as semanas — mesmo que viva no estrangeiro." },
  hero_btn1: { en: "Get a Free Project Assessment", pt: "Pedir Avaliação Gratuita" },
  hero_btn2: { en: "Calculate the cost in 30 seconds", pt: "Calcular o custo em 30 segundos" },
  trust1: { en: 'Fixed written quote — no hidden extras', pt: 'Orçamento escrito e fechado — sem extras' },
  trust2: { en: 'English &amp; Portuguese project manager', pt: 'Gestor de projeto em PT e EN' },
  trust3: { en: 'Weekly photo &amp; video updates', pt: 'Fotos e vídeos todas as semanas' },
  trust4: { en: "IMPIC licence 115511 &amp; insured", pt: "Alvará IMPIC 115511 e seguro" },
  calc_label: { en: 'Cost Calculator', pt: 'Calculadora de Custos' },
  calc_title: { en: 'What Will Your Project Cost? Find Out in 30 Seconds', pt: 'Quanto Vai Custar a Sua Obra? Descubra em 30 Segundos' },
  calc_sub: { en: 'Three quick questions — no email needed. You get an indicative price range and timeline for Northern Portugal.', pt: 'Três perguntas rápidas — sem pedir email. Recebe um intervalo de preço indicativo e o prazo para o Norte de Portugal.' },

  // SERVICES
  svc1_label: { en: 'Renovation & New Build', pt: 'Renovação & Construção Nova' },
  svc1_title: { en: 'Your Property, Transformed From Foundation to Finish', pt: 'A Sua Propriedade, Transformada da Fundação ao Acabamento' },
  svc1_desc: { en: "<li>Full renovations and new builds</li><li>Structure, plumbing and electrics</li><li>Kitchens, bathrooms and finishing</li><li>Every step documented — every decision yours</li>", pt: "<li>Remodelações completas e construção nova</li><li>Estrutura, canalização e eletricidade</li><li>Cozinhas, casas de banho e acabamentos</li><li>Cada etapa documentada — cada decisão é sua</li>" },
  svc1_btn: { en: 'Request a Site Visit', pt: 'Solicitar Visita ao Local' },
  svc2_label: { en: 'Pools & Outdoor Living', pt: 'Piscinas & Espaços Exteriores' },
  svc2_title: { en: 'Pools Built to Last Under the Portuguese Sun', pt: 'Piscinas Construídas Para Durar Sob o Sol Português' },
  svc2_desc: { en: "<li>Design, excavation, tiling and decking</li><li>All technical installations included</li><li>Infinity edges and mosaic finishes</li><li>Turnkey — no subcontractor surprises</li>", pt: "<li>Projeto, escavação, revestimento e deck</li><li>Todas as instalações técnicas incluídas</li><li>Bordas infinitas e acabamentos em mosaico</li><li>Chave na mão — sem surpresas de subempreiteiros</li>" },
  svc2_btn: { en: 'Get a Pool Estimate', pt: 'Pedir Orçamento de Piscina' },
  svc3_label: { en: 'Roofing & Infrastructure', pt: 'Coberturas & Infraestruturas' },
  svc3_title: { en: 'Protecting Your Investment From the Top Down', pt: 'Proteger o Seu Investimento De Cima Para Baixo' },
  svc3_desc: { en: "<li>Roof repairs and replacements</li><li>Traditional terracotta or modern materials</li><li>Foundations, retaining walls and drainage</li><li>Septic systems and waterproofing</li>", pt: "<li>Reparação e substituição de telhados</li><li>Telha tradicional ou materiais modernos</li><li>Fundações, muros de suporte e drenagem</li><li>Fossas sépticas e impermeabilização</li>" },
  svc3_btn: { en: 'Schedule an Inspection', pt: 'Agendar Inspeção' },

  // CARE PLANS TEASER
  care_label: { en: 'Property Care', pt: 'Manutenção de Propriedades' },
  care_title: { en: 'HomeCare Subscription Plans', pt: 'Planos de Manutenção HomeCare' },
  care_sub: { en: 'Regular inspections, preventive maintenance, and emergency response for real estate owners who aren\'t always on the ground. Three tiers from €99/month.', pt: 'Inspeções regulares, manutenção preventiva e resposta a emergências para proprietários que nem sempre estão presentes. Três níveis a partir de €99/mês.' },
  care_btn: { en: 'View Care Plans & Pricing', pt: 'Ver Planos & Preços' },

  // VALUES
  val_label: { en: 'Why Property Owners Choose Us', pt: 'Porque Nos Escolhem os Proprietários' },
  val_title: { en: 'Transparency. Communication. Results.', pt: 'Transparência. Comunicação. Resultados.' },
  val_sub: { en: 'We built our process around what real estate owners actually need', pt: 'Construímos o nosso processo em torno do que os proprietários realmente precisam' },
  v1_title: { en: 'A Quote You Can Trust', pt: 'Um Orçamento de Confiança' },
  v1_desc: { en: 'Our quotes are written and itemised, and the price for the agreed work is fixed. If unforeseen work appears, we stop and send you a separate written variation — nothing is done or charged without your approval. No pressure to sign on the spot.', pt: 'Os nossos orçamentos são escritos e detalhados, e o preço dos trabalhos acordados é fixo. Se surgir um imprevisto, paramos e enviamos-lhe uma alteração escrita à parte — nada é feito nem cobrado sem a sua aprovação. Sem pressão para assinar no momento.' },
  v2_title: { en: 'Bilingual From Day One', pt: 'Bilingue Desde o Primeiro Dia' },
  v2_desc: { en: 'English-speaking project management from enquiry to handover. Portuguese execution with local suppliers and licensed tradespeople.', pt: 'Gestão de projeto em inglês desde o contacto inicial até à entrega. Execução portuguesa com fornecedores locais e profissionais licenciados.' },
  v3_title: { en: 'Documented Progress', pt: 'Progresso Documentado' },
  v3_desc: { en: 'Photo and video updates at every stage, whether you\'re on site or managing remotely from abroad. You always know where your project stands.', pt: 'Atualizações com fotos e vídeos em cada fase, quer esteja no local ou a gerir remotamente. Sabe sempre em que ponto está o seu projeto.' },
  v4_title: { en: 'Owner-Managed Projects', pt: 'Projetos Geridos pelo Proprietário' },
  v4_desc: { en: 'A company principal manages your build directly. You\'ll have their phone number — no call centres, no runaround.', pt: 'Um diretor da empresa gere a sua obra diretamente. Terá o número dele — sem call centers, sem burocracias.' },
  v5_title: { en: 'Licensed & IMPIC Certified', pt: 'Licenciados & Certificados IMPIC' },
  v5_desc: { en: 'Fully licensed contractor registered with IMPIC. Insured, compliant, and operating under Portuguese construction law.', pt: 'Empreiteiro totalmente licenciado e registado no IMPIC. Seguro, conforme e a operar ao abrigo da lei portuguesa da construção.' },
  v6_title: { en: 'Meticulous Finish', pt: 'Acabamento Meticuloso' },
  v6_desc: { en: 'We don\'t leave until the site is clean and the snagging list is empty. Quality is in the details — and the cleanup.', pt: 'Não saímos até o local estar limpo e a lista de remates vazia. A qualidade está nos detalhes — e na limpeza.' },

  // CTA
  cta_title: { en: 'Get a Free No-Pressure Estimate', pt: 'Obtenha um Orçamento Gratuito Sem Compromisso' },
  cta_sub: { en: 'We\'ll visit your property, discuss your vision, and provide a detailed written quote — no obligation, no hard sell.', pt: 'Visitamos a sua propriedade, discutimos a sua visão e fornecemos um orçamento escrito detalhado — sem obrigação, sem pressão.' },
  cta1_title: { en: 'Free Site Visit', pt: 'Visita Gratuita' },
  cta1_desc: { en: 'We come to your property, assess the scope, and walk you through options before you commit to anything.', pt: 'Deslocamo-nos à sua propriedade, avaliamos o âmbito e apresentamos as opções antes de qualquer compromisso.' },
  cta1_btn: { en: 'Schedule a Visit', pt: 'Agendar Visita' },
  cta2_title: { en: 'Video Site Assessment', pt: 'Avaliação por Vídeo' },
  cta2_desc: { en: 'Abroad? Walk us through your property on a video call and get a written scope and price range — without flying in.', pt: 'Está no estrangeiro? Mostre-nos a propriedade numa videochamada e receba o âmbito e um intervalo de preço por escrito — sem viajar.' },
  cta2_btn: { en: 'Book a Call', pt: 'Marcar Chamada' },
  cta3_title: { en: 'IMPIC Licensed', pt: 'Licenciados IMPIC' },
  cta3_desc: { en: 'Fully registered under Portuguese construction law. Your project is protected by proper licensing and insurance.', pt: 'Totalmente registados ao abrigo da lei portuguesa da construção. O seu projeto está protegido por licenciamento e seguro adequados.' },
  cta3_btn: { en: 'Learn More', pt: 'Saber Mais' },

  // PROJECTS
  proj_label: { en: 'Our Work', pt: 'Os Nossos Trabalhos' },
  proj_title: { en: 'Real Projects, Real Transformations', pt: 'Projetos Reais, Transformações Reais' },
  proj_sub: { en: 'Drag the slider to see the transformation. Every project shown was completed by our team.', pt: 'Arraste o cursor para ver a transformação. Todos os projetos mostrados foram concluídos pela nossa equipa.' },
  ba_before: { en: 'Before', pt: 'Antes' },
  ba_after: { en: 'After', pt: 'Depois' },

  // TESTIMONIALS
  test_label: { en: 'What Our Clients Say', pt: 'O Que Dizem Os Nossos Clientes' },
  test_title: { en: 'Built on Trust, Backed by Results', pt: 'Construído na Confiança, Comprovado por Resultados' },
  t1_quote: { en: 'They managed everything while we were in the UK — weekly photo updates, video calls when decisions were needed, and the finished result exceeded what we imagined.', pt: 'Geriram tudo enquanto estávamos no Reino Unido — atualizações fotográficas semanais, videochamadas quando eram necessárias decisões, e o resultado final superou o que imaginámos.' },
  t1_loc: { en: 'Aveiro, Villa Renovation', pt: 'Aveiro, Renovação de Moradia' },
  t2_quote: { en: 'As an architect I\'m particular about execution. Their crew understood the drawings, communicated clearly, and delivered the contemporary finish I designed.', pt: 'Como arquiteto, sou exigente com a execução. A equipa compreendeu os desenhos, comunicou claramente e entregou o acabamento contemporâneo que projetei.' },
  t2_loc: { en: 'Porto, New Build', pt: 'Porto, Construção Nova' },
  t3_quote: { en: 'The pool is exactly what I wanted — the mosaic work is beautiful, and they handled every permit and inspection. I just had to choose the tiles.', pt: 'A piscina é exatamente o que eu queria — o trabalho de mosaico é lindo, e trataram de todas as licenças e inspeções. Só tive de escolher os azulejos.' },
  t3_loc: { en: 'Douro Valley, Pool Construction', pt: 'Vale do Douro, Construção de Piscina' },

  // FAQ
  faq_label: { en: 'Frequently Asked Questions', pt: 'Perguntas Frequentes' },
  faq_title: { en: 'What You Need to Know', pt: 'O Que Precisa de Saber' },

  // CONTACT
  ct_label: { en: 'Get in Touch', pt: 'Entre em Contacto' },
  ct_title: { en: 'Request Your Free Estimate', pt: 'Solicite o Seu Orçamento Gratuito' },
  ct_sub: { en: 'Tell us about your property and project. We\'ll respond within 48 hours with initial guidance.', pt: 'Fale-nos da sua propriedade e projeto. Respondemos dentro de 48 horas com orientação inicial.' },
  f_name: { en: 'Full Name *', pt: 'Nome Completo *' },
  f_phone: { en: 'Phone / WhatsApp', pt: 'Telefone / WhatsApp' },
  f_location: { en: 'Property Location', pt: 'Localização do Imóvel' },
  f_sel_area: { en: 'Property location', pt: 'Localização do imóvel' },
  f_other: { en: 'Other', pt: 'Outro' },
  f_type: { en: 'Project Type', pt: 'Tipo de Projeto' },
  f_sel_type: { en: 'Select type', pt: 'Selecionar tipo' },
  f_opt_reno: { en: 'Full Renovation', pt: 'Renovação Completa' },
  f_opt_new: { en: 'New Build', pt: 'Construção Nova' },
  f_opt_kb: { en: 'Kitchen & Bathroom', pt: 'Cozinha & Casa de Banho' },
  f_opt_roof: { en: 'Roofing', pt: 'Coberturas' },
  f_opt_pool: { en: 'Pool Construction', pt: 'Construção de Piscina' },
  f_opt_land: { en: 'Landscaping', pt: 'Paisagismo' },
  f_opt_infra: { en: 'Infrastructure', pt: 'Infraestruturas' },
  f_opt_care: { en: 'HomeCare Plan', pt: 'Plano HomeCare' },
  f_timing: { en: 'Desired Start', pt: 'Início Desejado' },
  f_sel_time: { en: 'Select timing', pt: 'Selecionar prazo' },
  f_asap: { en: 'As soon as possible', pt: 'O mais breve possível' },
  f_3m: { en: 'Within 3 months', pt: 'Dentro de 3 meses' },
  f_36m: { en: '3-6 months', pt: '3-6 meses' },
  f_612m: { en: '6-12 months', pt: '6-12 meses' },
  f_explore: { en: 'Just exploring', pt: 'Apenas a explorar' },
  f_desc: { en: 'Tell Us About Your Project', pt: 'Fale-nos Sobre o Seu Projeto' },
  f_submit: { en: 'Send Enquiry', pt: 'Enviar Pedido' },
  f_photos: { en: 'Photos of the Property (optional)', pt: 'Fotografias da Propriedade (opcional)' },
  f_photos_hint: { en: 'Up to 5 files — photos or plans (JPG, PNG, PDF), max 10 MB each.', pt: 'Até 5 ficheiros — fotografias ou plantas (JPG, PNG, PDF), máx. 10 MB cada.' },
  f_consent: { en: 'I agree that Blame The Stars, Lda. may use my details to answer this request, as described in the <a href="#" onclick="showPage(\'privacy\');return false;">Privacy Policy</a>.', pt: 'Autorizo a Blame The Stars, Lda. a usar os meus dados para responder a este pedido, conforme a <a href="#" onclick="showPage(\'privacy\');return false;">Política de Privacidade</a>.' },
  sent_t: { en: 'Thank you — your request is in!', pt: 'Obrigado — recebemos o seu pedido!' },
  sent_d: { en: 'We have received your details and will reply within 48 hours. Want a faster answer? Send us a message on WhatsApp too.', pt: 'Recebemos os seus dados e respondemos em 48 horas. Quer uma resposta mais rápida? Envie-nos também uma mensagem no WhatsApp.' },
  cr_sent_t: { en: 'Application received — thank you!', pt: 'Candidatura recebida — obrigado!' },
  cr_sent_d: { en: 'We have your application. We will call you within 5 working days. You can also message us on WhatsApp.', pt: 'Recebemos a sua candidatura. Ligamos-lhe em até 5 dias úteis. Também nos pode escrever no WhatsApp.' },
  ci_title: { en: 'Speak With Us Directly', pt: 'Fale Connosco Diretamente' },
  ci_phone: { en: 'Phone', pt: 'Telefone' },
  ci_areas: { en: 'Service Areas', pt: 'Áreas de Serviço' },
  ci_response: { en: 'Response Time', pt: 'Tempo de Resposta' },
  ci_response_val: { en: 'Within 48 hours, Monday–Saturday', pt: 'Dentro de 48 horas, Segunda–Sábado' },
  ci_licensed: { en: 'Licensed Contractor', pt: 'Empreiteiro Licenciado' },
  ci_impic: { en: 'IMPIC Certified', pt: 'Certificado IMPIC' },
  ci_impic_desc: { en: 'Registered under Portuguese construction law. Insured and compliant.', pt: 'Registado ao abrigo da lei portuguesa da construção. Segurado e conforme.' },

  // SP
  sp_eyebrow: { en: 'HomeCare by BTS', pt: 'HomeCare pela BTS' },
  sp_h1: { en: 'Care Plans: Full Service Guide', pt: 'Planos de Manutenção: Guia Completo' },
  sp_intro: { en: 'Everything included in your subscription, what requires additional payment, labour rates, response times, and billing. No surprises, no hidden costs.', pt: 'Tudo incluído na sua subscrição, o que requer pagamento adicional, taxas de mão-de-obra, tempos de resposta e faturação. Sem surpresas, sem custos ocultos.' },
  sp_nav_compare: { en: 'Compare All', pt: 'Comparar Todos' },
  sla_title: { en: 'Service Level Agreement', pt: 'Acordo de Nível de Serviço' },
  sla_freq: { en: 'Inspection Frequency', pt: 'Frequência de Inspeção' },
  sla_emerg: { en: 'Emergency Response', pt: 'Resposta de Emergência' },
  sla_comm: { en: 'Communication', pt: 'Comunicação' },
  sla_report: { en: 'Reporting', pt: 'Relatórios' },
  sla_maint: { en: 'Included Maintenance', pt: 'Manutenção Incluída' },
  tag_incl: { en: 'Included', pt: 'Incluído' },
  tag_not: { en: 'Not included', pt: 'Não incluído' },
  tag_extra_rate: { en: 'Extra — member rate', pt: 'Extra — tarifa membro' },
  tag_quoted: { en: 'Extra — quoted', pt: 'Extra — orçamentado' },
  tag_quoted2: { en: 'Quoted', pt: 'Orçamentado' },
  cat_inspect: { en: 'Inspections & Monitoring', pt: 'Inspeções & Monitorização' },
  cat_maint: { en: 'Maintenance & Repairs', pt: 'Manutenção & Reparações' },
  cat_comm: { en: 'Communication & Reporting', pt: 'Comunicação & Relatórios' },
  cat_compliance: { en: 'Compliance & Documentation', pt: 'Conformidade & Documentação' },
  cat_extra: { en: 'Additional Services (Billed Separately)', pt: 'Serviços Adicionais (Faturados Separadamente)' },

  // Essential service items
  ess_ideal: { en: '<strong>Ideal for:</strong> seasonal second homes, unoccupied estates, and investment properties where the owner is abroad most of the year and needs reliable eyes on the ground.', pt: '<strong>Ideal para:</strong> segundas habitações sazonais, propriedades desocupadas e imóveis de investimento em que o proprietário está no estrangeiro a maior parte do ano e precisa de olhos de confiança no terreno.' },
  ess_freq_val: { en: 'Every 2 months (6/year)', pt: 'A cada 2 meses (6/ano)' },
  ess_emerg_val: { en: 'Next business day', pt: 'Próximo dia útil' },
  ess_comm_val: { en: 'Email reports in English', pt: 'Relatórios por email em inglês' },
  ess_report_val: { en: 'Photo & video dossier per visit', pt: 'Dossier foto & vídeo por visita' },
  ess_s1: { en: 'Bi-monthly property security & condition check', pt: 'Verificação bimensal de segurança e estado do imóvel' },
  ess_s1d: { en: 'A licensed technician visits your property every two months to check all exterior and interior areas: door and window locks, shutters, perimeter fencing, signs of forced entry or vandalism, visible water damage, roof condition from ground level, gutter blockage, garden overgrowth, pest activity, and general structural appearance.', pt: 'Um técnico licenciado visita o seu imóvel a cada dois meses para verificar todas as áreas exteriores e interiores: fechaduras de portas e janelas, persianas, vedações perimetrais, sinais de arrombamento ou vandalismo, danos visíveis de água, estado do telhado desde o solo, bloqueio de caleiras, crescimento excessivo do jardim, atividade de pragas e aspeto estrutural geral.' },
  ess_s2: { en: 'Annual Autumn Winter-Proofing Audit', pt: 'Auditoria Anual de Preparação para o Inverno' },
  ess_s2d: { en: 'Full exterior inspection of roof tiles, chimneys, guttering, downpipes, external rendering, and stone masonry. Interior checks for rising damp, condensation points, window seal integrity, and drainage system flow. You receive a comprehensive digital dossier in English with prioritised repair recommendations.', pt: 'Inspeção completa exterior de telhas, chaminés, caleiras, tubos de queda, reboco exterior e alvenaria de pedra. Verificações interiores de humidade ascendente, pontos de condensação, integridade das vedações de janelas e fluxo do sistema de drenagem. Recebe um dossier digital completo em inglês com recomendações de reparação priorizadas.' },
  ess_s3: { en: 'Thermal moisture-mapping scan', pt: 'Análise térmica de mapeamento de humidade' },
  ess_s3d: { en: 'Advanced thermal imaging to detect hidden moisture inside stone walls. Available as an add-on at €180 per session. Included with Active Host and Grand Quinta Care.', pt: 'Imagem térmica avançada para detetar humidade oculta em paredes de pedra. Disponível como extra a €180 por sessão. Incluído com Active Host e Grand Quinta Care.' },
  ess_s4: { en: 'Drone aerial roof & terrace inspection', pt: 'Inspeção aérea por drone de telhados e terraços' },
  ess_s4d: { en: 'High-resolution drone photography of roofing, terraces, retaining walls, and drainage systems. Available as an add-on at €150 per flight. Included with Grand Quinta Care.', pt: 'Fotografia de alta resolução por drone de coberturas, terraços, muros de contenção e sistemas de drenagem. Disponível como extra a €150 por voo. Incluído com Grand Quinta Care.' },
  ess_m1: { en: 'Minor preventive adjustments during inspections', pt: 'Ajustes preventivos menores durante inspeções' },
  ess_m1d: { en: 'Small tasks under 15 minutes requiring no materials: tightening handles, resetting breakers, clearing gutters by hand, checking water pressure, running taps to prevent pipe seal dry-out.', pt: 'Tarefas pequenas com menos de 15 minutos sem necessidade de materiais: apertar puxadores, repor disjuntores, limpar caleiras à mão, verificar pressão da água, correr torneiras para evitar secagem de vedações.' },
  ess_m2: { en: 'Handyman hours for scheduled maintenance', pt: 'Horas de faz-tudo para manutenção programada' },
  ess_m2d: { en: 'Repairs beyond minor adjustments are billed at the member rate of <strong>€25–40/hour</strong> plus materials at cost. Written quote provided before any work begins. Included monthly hours available with Active Host (2 hrs) and Grand Quinta Care (4 hrs).', pt: 'Reparações além de ajustes menores são faturadas à tarifa de membro de <strong>€25–40/hora</strong> mais materiais ao custo. Orçamento escrito fornecido antes de qualquer trabalho. Horas mensais incluídas disponíveis com Active Host (2h) e Grand Quinta Care (4h).' },
  ess_m3: { en: 'Emergency call-out and repair', pt: 'Chamada de emergência e reparação' },
  ess_m3d: { en: 'Call-out fee €60, plus labour at €25–40/hr and materials at cost. A technician visits on the next business day. Active Host and Grand Quinta Care include faster emergency arrival on site (2–4 hours, set by property location).', pt: 'Taxa de deslocação €60, mais mão-de-obra a €25–40/h e materiais ao custo. Um técnico desloca-se no próximo dia útil. O Active Host e o Grand Quinta Care incluem chegada mais rápida ao local em emergência (2–4 horas, conforme a localização do imóvel).' },
  ess_c1: { en: 'English-language inspection reports with photos & video', pt: 'Relatórios de inspeção em inglês com fotos e vídeo' },
  ess_c1d: { en: 'Structured report via email with timestamped photographs, video clips, written observations, condition summary, and recommended actions with estimated costs.', pt: 'Relatório estruturado por email com fotografias com data/hora, clips de vídeo, observações escritas, resumo do estado e ações recomendadas com custos estimados.' },
  ess_c2: { en: 'WhatsApp direct line to estate manager', pt: 'Linha direta WhatsApp com o gestor de propriedade' },
  ess_c2d: { en: 'Available with Active Host and Grand Quinta Care. Essential Care clients communicate via email with a 48-hour response commitment.', pt: 'Disponível com Active Host e Grand Quinta Care. Clientes Essential Care comunicam por email com compromisso de resposta de 48 horas.' },
  ess_d1: { en: '100% NIF-registered invoicing for all services', pt: 'Faturação 100% registada com NIF para todos os serviços' },
  ess_d1d: { en: 'Every service is invoiced with full NIF registration, compliant with Portuguese tax law. Essential documentation for Capital Gains Tax deductions when you sell the property.', pt: 'Cada serviço é faturado com registo NIF completo, conforme a lei fiscal portuguesa. Documentação essencial para deduções de mais-valias quando vender o imóvel.' },
  ess_d2: { en: 'AICCOPN Class-2 licensed tradespeople only', pt: 'Apenas profissionais licenciados AICCOPN Classe 2' },
  ess_d2d: { en: 'Every technician holds AICCOPN certification and carries full professional liability insurance.', pt: 'Cada técnico possui certificação AICCOPN e seguro de responsabilidade profissional completo.' },
  sp_not_covered: { en: '<strong>What is NOT covered by any plan:</strong> Utility bills, property taxes (IMI), condominium fees, insurance premiums, furniture or appliance purchases, pool chemical supplies, garden landscaping redesign, or any cosmetic renovation project.', pt: '<strong>O que NÃO está coberto por nenhum plano:</strong> Contas de serviços públicos, impostos sobre imóveis (IMI), quotas de condomínio, prémios de seguro, compra de mobiliário ou eletrodomésticos, produtos químicos para piscina, redesenho paisagístico ou qualquer projeto de renovação cosmética.' },
  ess_upgrade: { en: 'Need faster emergency help, monthly handyman hours, or WhatsApp access? <strong>Upgrade to Active Host</strong>: a technician on site within 2–4 hours (set by property location) plus 2 included maintenance hours every month.', pt: 'Precisa de ajuda mais rápida em emergências, horas mensais de faz-tudo ou acesso WhatsApp? <strong>Faça upgrade para Active Host</strong>: um técnico no local em 2–4 horas (conforme a localização do imóvel) mais 2 horas de manutenção incluídas por mês.' },

  // Active Host
  act_ideal: { en: '<strong>Ideal for:</strong> rental properties (Alojamento Local), frequently visited estates, and owners who need their property continuously guest-ready.', pt: '<strong>Ideal para:</strong> imóveis para arrendamento (Alojamento Local), propriedades visitadas frequentemente e proprietários que precisam do imóvel sempre pronto para hóspedes.' },
  act_freq_val: { en: 'Monthly (12/year)', pt: 'Mensal (12/ano)' },
  act_emerg_val: { en: 'Arrival on site within 2–4 h (set by location) · 7 days/week', pt: 'Chegada ao local em 2–4 h (conforme a localização) · 7 dias/semana' },
  act_maint_val: { en: '2 handyman hours/month', pt: '2 horas de faz-tudo/mês' },
  act_plus: { en: 'Everything in Essential Care, plus:', pt: 'Tudo no Essential Care, mais:' },
  act_s1: { en: 'Monthly property inspection (doubled frequency)', pt: 'Inspeção mensal do imóvel (frequência duplicada)' },
  act_s2: { en: '2 hours of handyman maintenance per month', pt: '2 horas de manutenção por mês' },
  act_s4: { en: 'Emergency arrival on site within 2–4 hours, set in your contract by property location (7 days/week)', pt: 'Chegada ao local em emergência em 2–4 horas, definida no contrato conforme a localização do imóvel (7 dias/semana)' },
  act_s5: { en: 'WhatsApp direct line to your estate manager', pt: 'Linha direta WhatsApp com o seu gestor' },
  act_s6: { en: 'Pre-arrival guest readiness turnaround', pt: 'Preparação pré-chegada de hóspedes' },
  act_s7: { en: 'Proactive maintenance scheduling', pt: 'Programação proativa de manutenção' },
  act_e1: { en: 'Maintenance hours beyond 2 hrs/month', pt: 'Horas de manutenção além de 2h/mês' },
  act_e2: { en: 'Drone aerial inspection', pt: 'Inspeção aérea por drone' },
  act_e3: { en: 'Major structural works', pt: 'Obras estruturais de grande porte' },
  act_e4: { en: 'Guest turnarounds beyond 6/year', pt: 'Preparações para hóspedes além de 6/ano' },
  act_note: { en: '<strong>About materials costs:</strong> All materials are billed at cost with supplier receipts provided. We never mark up materials. You benefit from our trade accounts — typically 10–20% below retail prices.', pt: '<strong>Sobre custos de materiais:</strong> Todos os materiais são faturados ao custo com recibos do fornecedor. Nunca aplicamos margem nos materiais. Beneficia das nossas contas comerciais — tipicamente 10–20% abaixo dos preços de retalho.' },
  act_upgrade: { en: 'Managing a vineyard, boutique hotel, or premium quinta? <strong>Upgrade to Grand Quinta Care</strong> for priority 24/7 emergency arrival (2–4 hours, set by location), 4 monthly maintenance hours, drone inspections, and a dedicated estate manager.', pt: 'Gere uma vinha, hotel boutique ou quinta premium? <strong>Faça upgrade para Grand Quinta Care</strong> para chegada prioritária em emergência 24/7 (2–4 horas, conforme a localização), 4 horas mensais de manutenção, inspeções por drone e um gestor de propriedade dedicado.' },

  // Grand Quinta
  gq_ideal: { en: '<strong>Ideal for:</strong> premium estates with vineyards, boutique wine hotels (Quintas), luxury guesthouses, and high-value heritage properties.', pt: '<strong>Ideal para:</strong> propriedades premium com vinhas, hotéis vinícolas boutique (Quintas), casas de hóspedes de luxo e propriedades patrimoniais de alto valor.' },
  gq_freq_val: { en: 'Monthly + ad-hoc storm checks', pt: 'Mensal + verificações pós-tempestade' },
  gq_emerg_val: { en: 'Priority arrival on site within 2–4 h (set by location) · 24/7', pt: 'Chegada prioritária ao local em 2–4 h (conforme a localização) · 24/7' },
  gq_comm_val: { en: 'Dedicated estate manager', pt: 'Gestor de propriedade dedicado' },
  gq_maint_val: { en: '4 handyman hours/month', pt: '4 horas de faz-tudo/mês' },
  gq_plus: { en: 'Everything in Active Host, plus:', pt: 'Tudo no Active Host, mais:' },
  gq_s1: { en: 'Priority emergency arrival on site within 2–4 hours, set in your contract by property location (24/7, 365 days)', pt: 'Chegada prioritária ao local em emergência em 2–4 horas, definida no contrato conforme a localização do imóvel (24/7, 365 dias)' },
  gq_s2: { en: '4 hours of handyman maintenance per month', pt: '4 horas de manutenção por mês' },
  gq_s3: { en: 'Dedicated estate manager (named contact)', pt: 'Gestor de propriedade dedicado (contacto nomeado)' },
  gq_s4: { en: 'Drone aerial inspection (2 flights/year)', pt: 'Inspeção aérea por drone (2 voos/ano)' },
  gq_s5: { en: 'Thermal moisture-mapping (2 sessions/year)', pt: 'Mapeamento térmico de humidade (2 sessões/ano)' },
  gq_s6: { en: 'Retaining wall & terrace structural monitoring', pt: 'Monitorização estrutural de muros de contenção e terraços' },
  gq_s7: { en: 'Agricultural drainage system management', pt: 'Gestão de sistemas de drenagem agrícola' },
  gq_s8: { en: 'Unlimited guest readiness turnarounds', pt: 'Preparações ilimitadas para hóspedes' },
  gq_s9: { en: 'Ad-hoc storm and extreme weather checks', pt: 'Verificações ad-hoc após tempestades e condições extremas' },
  gq_s10: { en: 'Capital Gains Tax documentation package', pt: 'Pacote de documentação para mais-valias' },
  gq_e1: { en: 'Maintenance hours beyond 4 hrs/month', pt: 'Horas de manutenção além de 4h/mês' },
  gq_e2: { en: 'Major structural works & renovation projects', pt: 'Obras estruturais e projetos de renovação de grande porte' },
  gq_e3: { en: 'Utility & administrative payment management', pt: 'Gestão de pagamentos de serviços e administrativos' },
  gq_note: { en: '<strong>Grand Quinta Care members receive priority crew allocation.</strong> During peak demand, our regional crew prioritises Grand Quinta properties. In a market where 86% of construction firms cannot find available labour, this guaranteed crew access is your most valuable asset protection.', pt: '<strong>Membros Grand Quinta Care recebem alocação prioritária de equipa.</strong> Durante picos de procura, a nossa equipa regional prioriza propriedades Grand Quinta. Num mercado onde 86% das empresas de construção não conseguem encontrar mão-de-obra disponível, este acesso garantido à equipa é a sua proteção de ativos mais valiosa.' },

  // Compare
  cmp_title: { en: 'Side-by-Side Comparison', pt: 'Comparação Lado a Lado' },
  cmp_service: { en: 'Service', pt: 'Serviço' },
  cmp_inspyr: { en: 'Property inspections per year', pt: 'Inspeções por ano' },
  cmp_audit: { en: 'Autumn Winter-Proofing Audit', pt: 'Auditoria de Preparação Inverno' },
  cmp_thermal: { en: 'Thermal moisture-mapping', pt: 'Mapeamento térmico de humidade' },
  cmp_drone: { en: 'Drone aerial inspection', pt: 'Inspeção aérea por drone' },
  cmp_wall: { en: 'Retaining wall monitoring', pt: 'Monitorização de muros de contenção' },
  cmp_storm: { en: 'Post-storm proactive check', pt: 'Verificação proativa pós-tempestade' },
  cmp_hours: { en: 'Included handyman hours/month', pt: 'Horas de faz-tudo incluídas/mês' },
  cmp_rate: { en: 'Additional labour rate', pt: 'Tarifa de mão-de-obra adicional' },
  cmp_pm: { en: 'Project management fee', pt: 'Taxa de gestão de projeto' },
  cmp_emerg_cat: { en: 'Emergency Response', pt: 'Resposta de Emergência' },
  cmp_callout: { en: 'Emergency call-out fee', pt: 'Taxa de chamada de emergência' },
  cmp_waived: { en: 'Waived', pt: 'Isento' },
  cmp_incllab: { en: 'Included emergency labour', pt: 'Mão-de-obra de emergência incluída' },
  cmp_reports: { en: 'Photo/video reports', pt: 'Relatórios foto/vídeo' },
  cmp_dedicated: { en: 'Dedicated estate manager', pt: 'Gestor de propriedade dedicado' },
  cmp_guest_cat: { en: 'Guest & Rental', pt: 'Hóspedes & Arrendamento' },
  cmp_turns: { en: 'Pre-arrival turnarounds', pt: 'Preparações pré-chegada' },
  cmp_unlim: { en: 'Unlimited', pt: 'Ilimitado' },
  cmp_nif: { en: 'NIF-registered invoicing', pt: 'Faturação registada com NIF' },
  cmp_cgt: { en: 'CGT documentation', pt: 'Documentação mais-valias' },

  // Billing
  bill_title: { en: 'Billing & Contract Terms', pt: 'Faturação & Termos Contratuais' },
  bill1_t: { en: 'Payment Options', pt: 'Opções de Pagamento' },
  bill1_d: { en: 'Annual billing (best value) or quarterly at a modest premium. All subscriptions paid in advance by bank transfer or direct debit. 23% IVA included in all displayed prices.', pt: 'Faturação anual (melhor valor) ou trimestral com um prémio modesto. Todas as subscrições pagas antecipadamente por transferência bancária ou débito direto. 23% IVA incluído em todos os preços apresentados.' },
  bill2_t: { en: 'Minimum Commitment', pt: 'Compromisso Mínimo' },
  bill2_d: { en: 'Annual: 12-month minimum. Quarterly: 6-month minimum. Cancel with 30 days\' written notice after minimum period. No cancellation fees.', pt: 'Anual: mínimo 12 meses. Trimestral: mínimo 6 meses. Cancele com 30 dias de aviso escrito após período mínimo. Sem taxas de cancelamento.' },
  bill3_t: { en: 'Plan Changes', pt: 'Alteração de Plano' },
  bill3_d: { en: 'Upgrade at any time (pro-rated). Downgrade at end of current billing period. All inspection records and maintenance logs carry over.', pt: 'Upgrade a qualquer momento (proporcional). Downgrade no fim do período de faturação atual. Todos os registos de inspeção e manutenção transitam.' },
  bill4_t: { en: 'Additional Work', pt: 'Trabalho Adicional' },
  bill4_d: { en: 'Quoted in writing before it begins. You approve via email or WhatsApp. Invoiced within 7 days. Payment due within 15 days. All NIF-registered.', pt: 'Orçamentado por escrito antes de iniciar. Aprovação por email ou WhatsApp. Faturado em 7 dias. Pagamento em 15 dias. Tudo registado com NIF.' },
  bill5_t: { en: 'Materials Policy', pt: 'Política de Materiais' },
  bill5_d: { en: 'Always billed at cost, never marked up. Supplier receipts provided. We source from regional trade suppliers — typically 10–20% below retail.', pt: 'Sempre faturados ao custo, sem margem. Recibos do fornecedor incluídos. Compramos a fornecedores comerciais regionais — tipicamente 10–20% abaixo do preço de retalho.' },
  bill6_t: { en: 'Labour Rates', pt: 'Taxas de Mão-de-Obra' },
  bill6_d: { en: 'General handyman €25/hr, plumber/electrician €32/hr, mason/roofer €40/hr. Benchmarked against qualified skilled labour in the region.', pt: 'Faz-tudo geral €25/h, canalizador/eletricista €32/h, pedreiro/telhador €40/h. Comparados com mão-de-obra qualificada na região.' },

  // SP CTA
  sp_cta_title: { en: 'Ready to Protect Your Investment?', pt: 'Pronto Para Proteger o Seu Investimento?' },
  sp_cta_sub: { en: 'Tell us about your property and we\'ll recommend the right plan. No obligation.', pt: 'Fale-nos da sua propriedade e recomendaremos o plano certo. Sem compromisso.' },
  sp_cta_btn: { en: 'Get My Plan Recommendation', pt: 'Receber a Minha Recomendação de Plano' },

  // CAREERS
  nav_careers: { en: 'Careers', pt: 'Carreiras' },
  cr_label: { en: 'Careers at BTS', pt: 'Carreiras na BTS' },
  cr_title: { en: 'We\'re Hiring Skilled Construction Professionals', pt: 'Estamos a Recrutar Profissionais da Construção' },
  cr_sub: { en: 'Our team is growing across Northern Portugal. If you take pride in solid, clean work, we want to hear from you — send us your CV and apply in a few minutes.', pt: 'A nossa equipa está a crescer no Norte de Portugal. Se tem orgulho num trabalho sólido e bem feito, queremos conhecê-lo — envie-nos o seu CV e candidate-se em poucos minutos.' },
  cr_perk1: { en: 'Employment contract', pt: 'Contrato de trabalho' },
  cr_perk2: { en: 'Steady, year-round work', pt: 'Trabalho estável todo o ano' },
  cr_perk3: { en: 'Safety gear (PPE) provided', pt: 'EPI fornecido' },
  cr_perk4: { en: 'Pay based on experience', pt: 'Remuneração conforme experiência' },
  cr_open: { en: 'Open position', pt: 'Vaga aberta' },
  cr_loc: { en: 'Aveiro · Porto · Douro Valley', pt: 'Aveiro · Porto · Vale do Douro' },
  cr_full: { en: 'Full-time', pt: 'Tempo inteiro' },
  cr_do: { en: 'What you\'ll do', pt: 'Funções' },
  cr_need: { en: 'What we\'re looking for', pt: 'Perfil procurado' },
  cr_apply_btn: { en: 'Apply for this job', pt: 'Candidatar-me a esta vaga' },
  cr_j1_sub: { en: 'Stonemason · Bricklayer', pt: 'Alvenaria de pedra e tijolo' },
  cr_j1_exp: { en: '3+ years\' experience', pt: 'Experiência mín. 3 anos' },
  cr_j1_do: { en: '<li>Build and repair stone and brick masonry walls</li><li>Restore traditional granite and schist walls on rural properties</li><li>Build retaining walls, foundations and small concrete works</li><li>Lay blocks, render and prepare surfaces for finishing</li>', pt: '<li>Construir e reparar alvenarias de pedra e tijolo</li><li>Recuperar muros tradicionais de granito e xisto em propriedades rurais</li><li>Executar muros de suporte, fundações e pequenas obras de betão</li><li>Assentar blocos, rebocar e preparar superfícies para acabamento</li>' },
  cr_j1_need: { en: '<li>Proven experience as a mason (pedreiro)</li><li>Knowledge of natural stone — granite, schist</li><li>Able to read basic construction drawings</li><li>Reliable, tidy and safety-minded; driving licence is a plus</li>', pt: '<li>Experiência comprovada como pedreiro</li><li>Conhecimento de pedra natural — granito, xisto</li><li>Capacidade de ler desenhos de construção simples</li><li>Responsável, organizado e cumpridor das regras de segurança; carta de condução é uma vantagem</li>' },
  cr_j2_sub: { en: 'Formwork Carpenter', pt: 'Cofragem para betão armado' },
  cr_j2_exp: { en: '2+ years\' experience', pt: 'Experiência mín. 2 anos' },
  cr_j2_do: { en: '<li>Assemble and strip formwork for foundations, slabs, beams, columns and walls</li><li>Work with traditional timber and modular/metal formwork systems</li><li>Set out, level and brace formwork to the drawings</li><li>Support concrete pours and look after equipment and materials</li>', pt: '<li>Montar e descofrar cofragens de fundações, lajes, vigas, pilares e muros</li><li>Trabalhar com cofragem tradicional em madeira e sistemas modulares/metálicos</li><li>Implantar, nivelar e escorar cofragens de acordo com o projeto</li><li>Apoiar as betonagens e zelar pelos equipamentos e materiais</li>' },
  cr_j2_need: { en: '<li>Proven experience as a formwork carpenter</li><li>Able to read structural drawings and take accurate measurements</li><li>Safe working at height and with power tools</li><li>Team player, punctual; driving licence is a plus</li>', pt: '<li>Experiência comprovada como carpinteiro de cofragem</li><li>Capacidade de ler desenhos de estruturas e medir com rigor</li><li>Trabalho seguro em altura e com ferramentas elétricas</li><li>Espírito de equipa e pontualidade; carta de condução é uma vantagem</li>' },
  cr_form_title: { en: 'Send Us Your Application', pt: 'Envie a Sua Candidatura' },
  cr_form_sub: { en: 'Apply for an open position or send a spontaneous application for any construction trade.', pt: 'Candidate-se a uma vaga aberta ou envie uma candidatura espontânea para qualquer profissão da construção.' },
  cr_s1_t: { en: 'Fill in the form', pt: 'Preencha o formulário' },
  cr_s1_d: { en: 'Takes about 2 minutes.', pt: 'Demora cerca de 2 minutos.' },
  cr_s2_t: { en: 'Send it with your CV', pt: 'Envie-o com o seu CV' },
  cr_s2_d: { en: 'By WhatsApp or email — a PDF or a photo of your CV is fine.', pt: 'Por WhatsApp ou email — pode ser PDF ou uma fotografia do CV.' },
  cr_s3_t: { en: 'We call you back', pt: 'Nós ligamos-lhe' },
  cr_s3_d: { en: 'Within 5 working days to arrange a meeting.', pt: 'Em até 5 dias úteis para marcar uma entrevista.' },
  cr_f_phone: { en: 'Phone / WhatsApp *', pt: 'Telefone / WhatsApp *' },
  cr_f_pos: { en: 'Position *', pt: 'Vaga *' },
  cr_f_pos_sel: { en: 'Select position', pt: 'Selecione a vaga' },
  cr_opt_j1: { en: 'Pedreiro (Stonemason)', pt: 'Pedreiro' },
  cr_opt_j2: { en: 'Carpinteiro de Cofragem (Formwork Carpenter)', pt: 'Carpinteiro de Cofragem' },
  cr_opt_other: { en: 'Other trade (spontaneous application)', pt: 'Outra profissão (candidatura espontânea)' },
  cr_f_exp: { en: 'Years of Experience', pt: 'Anos de Experiência' },
  cr_f_sel: { en: 'Select', pt: 'Selecione' },
  cr_e1: { en: 'Less than 1 year', pt: 'Menos de 1 ano' },
  cr_e2: { en: '1–3 years', pt: '1–3 anos' },
  cr_e3: { en: '3–5 years', pt: '3–5 anos' },
  cr_e4: { en: '5–10 years', pt: '5–10 anos' },
  cr_e5: { en: 'More than 10 years', pt: 'Mais de 10 anos' },
  cr_f_start: { en: 'Available From', pt: 'Disponibilidade' },
  cr_a1: { en: 'Immediately', pt: 'Imediata' },
  cr_a2: { en: 'Within 2 weeks', pt: 'Dentro de 2 semanas' },
  cr_a3: { en: 'Within 1 month', pt: 'Dentro de 1 mês' },
  cr_a4: { en: 'More than 1 month', pt: 'Mais de 1 mês' },
  cr_f_city: { en: 'Where Do You Live?', pt: 'Onde Reside?' },
  cr_f_permit: { en: 'Authorised to Work in Portugal?', pt: 'Autorização para Trabalhar em Portugal?' },
  cr_yes: { en: 'Yes', pt: 'Sim' },
  cr_inproc: { en: 'In progress', pt: 'Em processo' },
  cr_no: { en: 'No', pt: 'Não' },
  cr_f_msg: { en: 'Tell Us About Your Experience', pt: 'Fale-nos da Sua Experiência' },
  cr_f_msg_ph: { en: 'Main jobs you\'ve done, companies you\'ve worked for, tools and machines you can use…', pt: 'Principais obras que fez, empresas onde trabalhou, ferramentas e máquinas que sabe usar…' },
  cr_consent: { en: 'I agree that Blame The Stars, Lda. may keep my details and CV for recruitment purposes only (GDPR / RGPD).', pt: 'Autorizo a Blame The Stars, Lda. a guardar os meus dados e CV apenas para fins de recrutamento (RGPD).' },
  cr_submit: { en: 'Continue — Send My CV', pt: 'Continuar — Enviar o Meu CV' },
  cr_f_cv: { en: 'Your CV', pt: 'O Seu CV' },
  cr_f_cv_hint: { en: 'PDF, Word or a photo of your CV — max 10 MB. No CV? You can still apply.', pt: 'PDF, Word ou fotografia do CV — máx. 10 MB. Não tem CV? Pode candidatar-se na mesma.' },
  cr_done_t: { en: 'Almost done — send your CV', pt: 'Quase pronto — envie o seu CV' },
  cr_done_d: { en: 'Your application is ready to send. Have your CV (PDF or photo) at hand.', pt: 'A sua candidatura está pronta a enviar. Tenha o seu CV (PDF ou fotografia) à mão.' },
  cr_wa_btn: { en: 'Send via WhatsApp', pt: 'Enviar por WhatsApp' },
  cr_or_email: { en: 'Prefer email? Send your CV and details to:', pt: 'Prefere email? Envie o seu CV e dados para:' },
  cr_copy: { en: 'Copy', pt: 'Copiar' },
  cr_copied: { en: 'Copied', pt: 'Copiado' },
  cr_edit: { en: '← Edit my application', pt: '← Editar a candidatura' },
  est_done_t: { en: 'Almost done — send your enquiry', pt: 'Quase pronto — envie o seu pedido' },
  est_done_d: { en: 'Your details are ready to send. Photos of the property are welcome.', pt: 'Os seus dados estão prontos a enviar. Fotografias da propriedade são bem-vindas.' },
  est_or_email: { en: 'Prefer email? Send your details to:', pt: 'Prefere email? Envie os seus dados para:' },
  est_edit: { en: '← Edit my enquiry', pt: '← Editar o pedido' },

  // FOOTER
  foot_desc: { en: 'Construction and Renovation for Real Estate Owners in Northern Portugal', pt: 'Construção e Renovação para Proprietários Imobiliários no Norte de Portugal' },
  foot_company: { en: 'Company', pt: 'Empresa' },
  foot_services: { en: 'Services', pt: 'Serviços' },
  foot_construction: { en: 'Construction', pt: 'Construção' },
  foot_pools: { en: 'Pool Construction', pt: 'Construção de Piscinas' },
  foot_roofing: { en: 'Roofing', pt: 'Coberturas' },
  foot_areas: { en: 'Areas Served', pt: 'Áreas de Serviço' },
  foot_privacy: { en: 'Privacy Policy', pt: 'Política de Privacidade' },
  foot_cookies: { en: 'Cookie Policy', pt: 'Política de Cookies' },
  legal_back: { en: '← Back to home', pt: '← Voltar ao início' },
  ci_office: { en: 'Office', pt: 'Escritório' },
  ai_fab: { en: 'Ask AI', pt: 'Pergunte à IA' },
  ai_title: { en: 'BTS Assistant', pt: 'Assistente BTS' },
  ai_badge: { en: 'AI · online', pt: 'IA · online' },
  ai_disclosure: { en: 'You are chatting with an AI assistant. Prices are indicative — our team confirms everything in a written quote. <a href="#" onclick="aiToggle(false);showPage(\'privacy\');return false;">Privacy</a>', pt: 'Está a falar com um assistente de IA. Os preços são indicativos — a nossa equipa confirma tudo num orçamento escrito. <a href="#" onclick="aiToggle(false);showPage(\'privacy\');return false;">Privacidade</a>' },
  ai_welcome: { en: 'Hi! I\'m the BTS assistant. Ask me about renovation costs, timelines, care plans or jobs — in any language.', pt: 'Olá! Sou o assistente da BTS. Pergunte-me sobre custos de obras, prazos, planos de manutenção ou vagas — em qualquer língua.' },
  ai_ph: { en: 'Type your question…', pt: 'Escreva a sua pergunta…' },
  ai_stop: { en: 'Stop', pt: 'Parar' },
  ai_human: { en: 'Talk to a person on WhatsApp →', pt: 'Falar com uma pessoa no WhatsApp →' },
};

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = T[el.dataset.i18nPh]; if (v) el.placeholder = v[currentLang] || v.en; });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] && T[key][lang] && el.innerHTML !== T[key][lang]) el.innerHTML = T[key][lang];
  });
  document.querySelectorAll('[data-lang]').forEach(el => { el.hidden = el.dataset.lang !== lang; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (T[key] && T[key][lang]) el.placeholder = T[key][lang];
  });
  document.querySelectorAll('.lang-toggle').forEach(b => { b.innerHTML = (lang === 'pt' ? FLAG_PT : FLAG_EN) + CHEV_SVG; });
  buildFAQ();
  buildSPFAQ();
  renderCalc();
  if (lastCalc && !document.getElementById('calcChip').hidden) showCalcChip();
  if (aiMode) { aiRenderChips(); aiUpdateHuman(); }
}
function toggleLang() { setLang(currentLang === 'en' ? 'pt' : 'en'); }
const FLAG_PT = '<svg class="flag" viewBox="0 0 30 20" aria-hidden="true"><rect width="12" height="20" fill="#046A38"/><rect x="12" width="18" height="20" fill="#DA291C"/><circle cx="12" cy="10" r="4.4" fill="#FFE900" stroke="#fff" stroke-width=".7"/></svg>';
const FLAG_EN = '<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>';
const CHEV_SVG = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
function toggleLangMenu(e) {
  e.stopPropagation();
  const menu = e.currentTarget.parentElement.querySelector('.lang-menu');
  const open = menu.hidden;
  document.querySelectorAll('.lang-menu').forEach(m => { m.hidden = true; });
  menu.hidden = !open;
}
function pickLang(lang) { setTimeout(placeResolveLink, 50); document.querySelectorAll('.lang-menu').forEach(m => { m.hidden = true; }); if (lang !== currentLang) setLang(lang); }
document.addEventListener('click', () => document.querySelectorAll('.lang-menu').forEach(m => { m.hidden = true; }));

// Careers — application
function applyFor(position) {
  document.getElementById('a_position').value = position;
  editApplication();
  showPage('careers', 'apply');
  setTimeout(() => document.getElementById('a_name').focus({ preventScroll: true }), 500);
}
function crOpt(id) {
  const s = document.getElementById(id);
  return s.value ? s.options[s.selectedIndex].text : '';
}
async function submitApplication(e) {
  e.preventDefault();
  if (document.getElementById('a_website').value) return;
  const pt = currentLang === 'pt';
  const val = id => document.getElementById(id).value.trim();
  const rows = [
    [pt ? 'Vaga' : 'Position', crOpt('a_position')],
    [pt ? 'Nome' : 'Name', val('a_name')],
    [pt ? 'Telefone' : 'Phone', val('a_phone')],
    ['Email', val('a_email')],
    [pt ? 'Experiência' : 'Experience', crOpt('a_exp')],
    [pt ? 'Disponibilidade' : 'Available from', crOpt('a_start')],
    [pt ? 'Residência' : 'Lives in', val('a_city')],
    [pt ? 'Autorização de trabalho' : 'Work permit', crOpt('a_permit')],
    [pt ? 'Experiência profissional' : 'About my experience', val('a_msg')]
  ].filter(r => r[1]);
  const header = pt ? 'Candidatura de emprego — BTS' : 'Job application — BTS';
  const footer = pt ? '(Envio o meu CV em anexo.)' : '(My CV is attached.)';
  const text = [header, '', ...rows.map(r => r[0] + ': ' + r[1]), '', footer].join('\n');
  document.getElementById('crWa').href = 'https://wa.me/351913965533?text=' + encodeURIComponent(text);

  const form = document.getElementById('crForm');
  let saved = false;
  if (sb) {
    form.classList.add('sending');
    try {
      const id = uuid();
      const cv = await uploadFiles('cv/' + id, document.getElementById('a_cv').files, 1);
      const now = Date.now();
      const pos = document.getElementById('a_position').value;
      const { error } = await btsInsert('candidates', {
        id, name: val('a_name'), phone: val('a_phone'), email: val('a_email'),
        vacancy_id: pos === 'pedreiro' ? 'vac_pedreiro' : pos === 'cofragem' ? 'vac_cofragem' : pos === 'pladur' ? 'vac_pladur' : pos === 'ferrageiro' ? 'vac_ferrageiro' : '',
        experience: optEn('a_exp'), availability: optEn('a_start'), city: val('a_city'),
        permit: optEn('a_permit'), notes: val('a_msg'), source: 'Website',
        cv_received: cv.length > 0, cv_path: cv[0] || null, stage: 'applied', lang: currentLang, consent: true,
        history: [{ at: now, text: 'Application received via website' + (cv.length ? ' (CV attached)' : '') }],
        created_at: now, updated_at: now
      });
      if (error) throw error;
      saved = true;
    } catch (err) { console.error('Application save failed', err); }
    form.classList.remove('sending');
  }
  setDone('crDone', saved ? 'cr_sent_t' : 'cr_done_t', saved ? 'cr_sent_d' : 'cr_done_d');
  form.hidden = true;
  document.getElementById('crDone').hidden = false;
}
function editApplication() {
  document.getElementById('crForm').hidden = false;
  document.getElementById('crDone').hidden = true;
}
function copyText(id, btn) {
  const node = document.getElementById(id);
  const done = () => { btn.textContent = T.cr_copied[currentLang]; setTimeout(() => { btn.textContent = T.cr_copy[currentLang]; }, 1800); };
  const fallback = () => { const r = document.createRange(); r.selectNodeContents(node); const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(node.textContent).then(done, fallback); } catch (err) { fallback(); }
}
function copyCrEmail(btn) { copyText('crEmail', btn); }

// Estimate request — saved to the CRM when the backend is connected, WhatsApp otherwise
async function submitEstimate(e) {
  e.preventDefault();
  if (document.getElementById('c_website').value) return;
  const pt = currentLang === 'pt';
  const val = id => document.getElementById(id).value.trim();
  const rows = [
    [pt ? 'Nome' : 'Name', val('c_name')],
    ['Email', val('c_email')],
    [pt ? 'Telefone' : 'Phone', val('c_phone')],
    [pt ? 'Localização' : 'Property location', crOpt('c_location')],
    [pt ? 'Tipo de projeto' : 'Project type', crOpt('c_service')],
    [pt ? 'Início pretendido' : 'Desired start', crOpt('c_timing')],
    [pt ? 'Estimativa da calculadora' : 'Calculator estimate', lastCalc ? lastCalc.summary : ''],
    [pt ? 'Projeto' : 'Project', val('c_desc')]
  ].filter(r => r[1]);
  const header = pt ? 'Pedido de orçamento — BTS' : 'Estimate request — BTS';
  const text = [header, '', ...rows.map(r => r[0] + ': ' + r[1])].join('\n');
  document.getElementById('estWa').href = 'https://wa.me/351913965533?text=' + encodeURIComponent(text);

  const form = document.getElementById('contactForm');
  let saved = false;
  if (sb) {
    form.classList.add('sending');
    try {
      const id = uuid();
      const photos = await uploadFiles('leads/' + id, document.getElementById('c_photos').files, 5);
      const now = Date.now();
      const { error } = await btsInsert('leads', {
        id, name: val('c_name'), email: val('c_email'), phone: val('c_phone'),
        location: optEn('c_location'), service: optEn('c_service'), timing: optEn('c_timing'),
        description: val('c_desc'), budget: lastCalc ? budgetBucket(lastCalc) : '',
        calc: lastCalc, photo_paths: photos, source: 'Website', stage: 'new',
        lang: currentLang, consent: true, created_at: now, updated_at: now
      });
      if (error) throw error;
      saved = true;
    } catch (err) { console.error('Lead save failed', err); }
    form.classList.remove('sending');
  }
  setDone('estDone', saved ? 'sent_t' : 'est_done_t', saved ? 'sent_d' : 'est_done_d');
  form.hidden = true;
  document.getElementById('estDone').hidden = false;
}
// BTS Resolve — small repair request (same CRM list, marked "BTS Resolve")
async function submitResolve(e) {
  e.preventDefault();
  if (document.getElementById('r_website').value) return;
  const pt = currentLang === 'pt';
  const val = id => document.getElementById(id).value.trim();
  const rows = [
    [pt ? 'Nome' : 'Name', val('r_name')],
    [pt ? 'Telefone' : 'Phone', val('r_phone')],
    [pt ? 'Local' : 'Location', val('r_place')],
    [pt ? 'Problema' : 'Problem', val('r_desc')]
  ].filter(r => r[1]);
  const text = ['BTS Resolve', '', ...rows.map(r => r[0] + ': ' + r[1])].join('\n');
  document.getElementById('rsWa').href = 'https://wa.me/351913965533?text=' + encodeURIComponent(text);

  const form = document.getElementById('rsForm');
  let saved = false;
  if (sb) {
    form.classList.add('sending');
    try {
      const id = uuid();
      const photos = await uploadFiles('leads/' + id, document.getElementById('r_photos').files, 5);
      const now = Date.now();
      const { error } = await btsInsert('leads', {
        id, name: val('r_name'), phone: val('r_phone'), location: val('r_place'),
        service: 'BTS Resolve', description: val('r_desc'), photo_paths: photos,
        source: 'Website', stage: 'new', lang: currentLang, consent: true, created_at: now, updated_at: now
      });
      if (error) throw error;
      saved = true;
    } catch (err) { console.error('Resolve request save failed', err); }
    form.classList.remove('sending');
  }
  setDone('rsDone', saved ? 'rs_sent_t' : 'est_done_t', saved ? 'rs_sent_d' : 'est_done_d');
  form.hidden = true;
  document.getElementById('rsDone').hidden = false;
}
function editEstimate() {
  document.getElementById('contactForm').hidden = false;
  document.getElementById('estDone').hidden = true;
}

// ── Backend (Supabase) — switched on by config.js; without it forms fall back to WhatsApp ──
const BTS = window.BTS_CONFIG || {};
let sb = null;
// Where the visitor came from (no cookies, kept only in this page view)
const BTS_CAME_FROM = (function () {
  try {
    const q = new URLSearchParams(location.search);
    const utm = (q.get('utm_source') || '').trim();
    if (utm) return utm.slice(0, 40);
    if (q.get('gclid')) return 'Google Ads';
    if (q.get('fbclid')) return 'Facebook / Instagram';
    const ref = document.referrer;
    if (!ref) return 'Direct / app (WhatsApp, email…)';
    const host = new URL(ref).hostname.replace(/^www\./, '');
    if (host === location.hostname.replace(/^www\./, '')) return 'Direct / app (WhatsApp, email…)';
    const known = [[/(^|\.)google\./, 'Google'], [/(^|\.)bing\.com$/, 'Bing'], [/facebook\.com$|(^|\.)fb\.com$/, 'Facebook'],
      [/instagram\.com$/, 'Instagram'], [/linkedin\.com$|lnkd\.in$/, 'LinkedIn'], [/(^|\.)t\.co$|twitter\.com$|(^|\.)x\.com$/, 'X / Twitter'],
      [/chatgpt\.com$|openai\.com$/, 'ChatGPT'], [/perplexity\.ai$/, 'Perplexity'], [/whatsapp\.com$/, 'WhatsApp'],
      [/duckduckgo\.com$/, 'DuckDuckGo'], [/yahoo\./, 'Yahoo']];
    for (const [re, name] of known) if (re.test(host)) return name;
    return host.slice(0, 40);
  } catch (e) { return null; }
})();
// Save a row with the visitor's source; if the database has no came_from column yet, save it without
async function btsInsert(table, row) {
  if (!sb) return { error: new Error('no backend') };
  const res = await sb.from(table).insert(BTS_CAME_FROM ? Object.assign({ came_from: BTS_CAME_FROM }, row) : row);
  if (res.error && /came_from/.test(res.error.message || '')) return sb.from(table).insert(row);
  return res;
}
(function initBackend() {
  if (!BTS.supabaseUrl || !BTS.supabaseKey) return;
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.min.js';
  s.onload = () => {
    try {
      sb = window.supabase.createClient(BTS.supabaseUrl, BTS.supabaseKey, { auth: { persistSession: false } });
      document.querySelectorAll('.backend-only').forEach(el => { el.hidden = false; });
    } catch (err) { console.warn('Backend unavailable', err); }
  };
  document.head.appendChild(s);
})();
function uuid() {
  return crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
}
function safeName(n) { return n.normalize('NFKD').replace(/[^\w.\-]+/g, '_').slice(-80); }
async function uploadFiles(folder, files, max) {
  const paths = [];
  for (const f of Array.from(files || []).slice(0, max)) {
    if (f.size > 10 * 1024 * 1024) continue;
    const path = folder + '/' + Date.now() + '-' + safeName(f.name);
    const { error } = await sb.storage.from('uploads').upload(path, f, { contentType: f.type || 'application/octet-stream', upsert: false });
    if (error) throw error;
    paths.push(path);
  }
  return paths;
}
// English label of a <select> choice, so the CRM stays in one language
function optEn(id) {
  const s = document.getElementById(id);
  if (!s.value && s.selectedIndex <= 0) return '';
  const o = s.options[s.selectedIndex];
  const key = o.getAttribute('data-i18n');
  return key && T[key] ? T[key].en : o.text;
}
function setDone(panelId, titleKey, descKey) {
  const p = document.getElementById(panelId);
  const h = p.querySelector('h3'), d = p.querySelector('h3 + p');
  h.setAttribute('data-i18n', titleKey); h.innerHTML = T[titleKey][currentLang];
  d.setAttribute('data-i18n', descKey); d.innerHTML = T[descKey][currentLang];
  // Not saved: the request reaches BTS only when the visitor presses Send inside WhatsApp
  const pending = /_done_t$/.test(titleKey);
  const step = p.querySelector('.wa-step');
  const btn = p.querySelector('.cr-wa-btn span[data-i18n]');
  const stepKey = pending ? (panelId === 'crDone' ? 'wa_step_cv' : 'wa_step') : 'wa_step_optional';
  step.setAttribute('data-i18n', stepKey); step.innerHTML = T[stepKey][currentLang]; step.hidden = false;
  step.classList.toggle('wa-step-pending', pending);
  p.classList.toggle('is-pending', pending);
  const btnKey = pending ? 'wa_btn_pending' : 'wa_btn_optional';
  btn.setAttribute('data-i18n', btnKey); btn.innerHTML = T[btnKey][currentLang];
}
function selectByKey(selectId, key) {
  const s = document.getElementById(selectId);
  const i = Array.from(s.options).findIndex(o => o.getAttribute('data-i18n') === key);
  if (i >= 0) s.selectedIndex = i;
}
function goEstimate(serviceKey) {
  closeCalcModal();
  showPage('home', 'contact');
  editEstimate();
  if (serviceKey) { selectByKey('c_service', serviceKey); document.getElementById('formMore').open = true; }
}

// ── Cost calculator ──
// INDICATIVE market ranges for Northern Portugal (EUR, labour + standard materials, VAT excluded).
// Replace with the BTS price list before relying on them.
const CALC_TYPES = {
  renovation: { unit: 'm2', min: 30, max: 400, def: 100, step: 5, perM2: { standard: [450, 650], premium: [650, 950], luxury: [950, 1400] }, weeks: a => [Math.round(6 + a * 0.07), Math.round(10 + a * 0.11)], service: 'f_opt_reno' },
  kitchen:    { unit: 'size', sizes: { s: [9000, 14000], m: [14000, 22000], l: [22000, 35000] }, mult: { standard: 1, premium: 1.35, luxury: 1.8 }, weeks: () => [2, 6], service: 'f_opt_kb' },
  bathroom:   { unit: 'size', sizes: { s: [6000, 9000], m: [9000, 14000], l: [14000, 22000] }, mult: { standard: 1, premium: 1.35, luxury: 1.8 }, weeks: () => [2, 6], service: 'f_opt_kb' },
  roof:       { unit: 'm2', min: 30, max: 400, def: 120, step: 5, perM2: { standard: [70, 110], premium: [110, 160], luxury: [160, 220] }, weeks: a => [Math.max(1, Math.round(1 + a / 80)), Math.round(3 + a / 60)], service: 'f_opt_roof' },
  pool:       { unit: 'size', sizes: { s: [25000, 35000], m: [35000, 50000], l: [50000, 75000] }, mult: { standard: 1, premium: 1.25, luxury: 1.6 }, weeks: () => [8, 14], service: 'f_opt_pool' },
  newbuild:   { unit: 'm2', min: 60, max: 500, def: 150, step: 10, perM2: { standard: [1100, 1400], premium: [1400, 1900], luxury: [1900, 2600] }, weeks: a => [Math.round(32 + a * 0.05), Math.round(48 + a * 0.08)], service: 'f_opt_new' },
  facade:     { unit: 'm2', min: 30, max: 600, def: 150, step: 10, perM2: { standard: [45, 75], premium: [75, 110], luxury: [110, 160] }, weeks: a => [Math.max(1, Math.round(1 + a / 100)), Math.round(3 + a / 70)], service: 'f_opt_infra' }
};
const CALC_ICONS = {
  renovation: 'M3 12l9-9 9 9M5 10v10h14V10M10 20v-6h4v6',
  kitchen: 'M4 3h16v18H4zM4 9h16M8 6h.01M12 6h.01M9 13h6',
  bathroom: 'M4 12h16v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3zM6 12V5a2 2 0 014 0',
  roof: 'M2 13l10-8 10 8M5 11v9h14v-9M9 20v-4h6v4',
  pool: 'M2 17c2 0 2 1.5 4 1.5S8 17 10 17s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5M8 14V5a2 2 0 014 0M14 14V5a2 2 0 014 0M8 9h10',
  newbuild: 'M4 21V9l8-6 8 6v12M9 21v-7h6v7M2 21h20',
  facade: 'M4 21V4h16v17M4 9h16M4 15h16M10 4v17'
};
const CT = {
  en: {
    step: 'Step {n} of 3', q1: 'What do you want to do?', q2area: 'How big is the area?', q2size: 'How big is it?', q3: 'Which finish level?',
    types: { renovation: ['Full renovation', 'House or apartment, inside'], kitchen: ['Kitchen', 'New or remodelled'], bathroom: ['Bathroom', 'New or remodelled'], roof: ['Roof', 'Repair or replacement'], pool: ['Swimming pool', 'Build a new pool'], newbuild: ['New build', 'House from the ground up'], facade: ['Facade & exterior', 'Render, paint, insulation'] },
    sizes: { kitchen: [['Small', 'up to 8 m²'], ['Medium', '8–15 m²'], ['Large', '15 m²+ or open-plan']], bathroom: [['Small', 'up to 4 m²'], ['Medium', '4–8 m²'], ['Large', '8 m²+ / en-suite']], pool: [['Small', 'about 6 × 3 m'], ['Medium', 'about 8 × 4 m'], ['Large', '10 × 5 m or infinity edge']] },
    finish: { standard: ['Standard', 'Good-quality materials, practical finish'], premium: ['Premium', 'Upgraded materials and fittings'], luxury: ['Luxury', 'Top-end materials, bespoke details'] },
    next: 'Next →', back: '← Back', again: 'Start again', area: 'm²', other: ['Something else', 'Tell us about your project'],
    priceLabel: 'Indicative price range', duration: 'Typical duration', weeks: 'weeks', months: 'months', project: 'Project', finishL: 'Finish',
    includes: 'Usually included',
    incl: { renovation: ['Demolition and waste removal', 'Plumbing and electrical renewal', 'Plaster, flooring and painting', 'Project management and weekly updates'], kitchen: ['Removal of the old kitchen', 'Plumbing and electrical points', 'Cabinets, worktop and tiling', 'Installation of appliances'], bathroom: ['Stripping and waterproofing', 'Sanitary ware and shower/bath', 'Tiling and lighting', 'Plumbing connections'], roof: ['Scaffolding and safety', 'Removal of old covering', 'Insulation and waterproof membrane', 'Tiles or panels, gutters'], pool: ['Excavation and structure', 'Filtration and plumbing', 'Tiling or liner', 'Surrounding deck edge'], newbuild: ['Foundations and structure', 'Roof, walls and windows', 'Plumbing, electrics, finishes', 'Licensing support and project management'], facade: ['Scaffolding', 'Surface repair and cleaning', 'Insulation or render', 'Paint finish'] },
    note: '<b>Indicative estimate only; your fixed written quote follows a property assessment</b> (a free site visit, or a video call if you are abroad). Market range for Northern Portugal, labour and materials, VAT not included.',
    cta: 'Get My Exact Fixed Quote', wa: 'Send This to WhatsApp', video: 'Book a free video visit', videoNote: 'Abroad? We show you the property on a live video call.', summary: '{type}, {size}, {finish} — {price}, {dur}'
  },
  pt: {
    step: 'Passo {n} de 3', q1: 'O que pretende fazer?', q2area: 'Qual é a área?', q2size: 'Qual é a dimensão?', q3: 'Que nível de acabamento?',
    types: { renovation: ['Remodelação completa', 'Casa ou apartamento, interior'], kitchen: ['Cozinha', 'Nova ou remodelada'], bathroom: ['Casa de banho', 'Nova ou remodelada'], roof: ['Telhado', 'Reparação ou substituição'], pool: ['Piscina', 'Construção de piscina nova'], newbuild: ['Construção nova', 'Moradia de raiz'], facade: ['Fachada e exterior', 'Reboco, pintura, isolamento'] },
    sizes: { kitchen: [['Pequena', 'até 8 m²'], ['Média', '8–15 m²'], ['Grande', '15 m²+ ou open-space']], bathroom: [['Pequena', 'até 4 m²'], ['Média', '4–8 m²'], ['Grande', '8 m²+ / suite']], pool: [['Pequena', 'cerca de 6 × 3 m'], ['Média', 'cerca de 8 × 4 m'], ['Grande', '10 × 5 m ou infinita']] },
    finish: { standard: ['Standard', 'Materiais de boa qualidade, acabamento prático'], premium: ['Premium', 'Materiais e equipamentos superiores'], luxury: ['Luxo', 'Materiais de topo, detalhes à medida'] },
    next: 'Seguinte →', back: '← Voltar', again: 'Recomeçar', area: 'm²', other: ['Outro projeto', 'Descreva-nos a sua obra'],
    priceLabel: 'Intervalo de preço indicativo', duration: 'Prazo habitual', weeks: 'semanas', months: 'meses', project: 'Obra', finishL: 'Acabamento',
    includes: 'Normalmente incluído',
    incl: { renovation: ['Demolição e remoção de entulho', 'Renovação de canalização e eletricidade', 'Estuque, pavimentos e pintura', 'Gestão de obra e relatórios semanais'], kitchen: ['Remoção da cozinha antiga', 'Pontos de água e eletricidade', 'Móveis, bancada e revestimentos', 'Instalação de eletrodomésticos'], bathroom: ['Demolição e impermeabilização', 'Loiças sanitárias e base de duche/banheira', 'Revestimentos e iluminação', 'Ligações de canalização'], roof: ['Andaimes e segurança', 'Remoção da cobertura antiga', 'Isolamento e membrana impermeável', 'Telha ou painel, caleiras'], pool: ['Escavação e estrutura', 'Filtragem e canalização', 'Revestimento ou liner', 'Bordadura e deck'], newbuild: ['Fundações e estrutura', 'Cobertura, paredes e caixilharia', 'Canalização, eletricidade, acabamentos', 'Apoio ao licenciamento e gestão de obra'], facade: ['Andaimes', 'Reparação e limpeza da superfície', 'Isolamento ou reboco', 'Pintura final'] },
    note: '<b>Estimativa apenas indicativa; o seu orçamento escrito e fechado segue-se a uma avaliação do imóvel</b> (visita gratuita, ou videochamada se estiver no estrangeiro). Intervalo de mercado para o Norte de Portugal, mão de obra e materiais, IVA não incluído.',
    cta: 'Receber o Meu Orçamento Fechado', wa: 'Enviar Isto por WhatsApp', video: 'Marcar visita gratuita por vídeo', videoNote: 'No estrangeiro? Mostramos-lhe o imóvel numa videochamada.', summary: '{type}, {size}, {finish} — {price}, {dur}'
  }
};
const calc = { step: 1, type: null, area: null, size: null, finish: null };
let lastCalc = null;
function eur(n) { return new Intl.NumberFormat(currentLang === 'pt' ? 'pt-PT' : 'en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n); }
function round500(n) { return Math.round(n / 500) * 500; }
function calcCompute() {
  const d = CALC_TYPES[calc.type];
  let lo, hi, w;
  if (d.unit === 'm2') { const [a, b] = d.perM2[calc.finish]; lo = a * calc.area; hi = b * calc.area; w = d.weeks(calc.area); }
  else { const [a, b] = d.sizes[calc.size]; const m = d.mult[calc.finish]; lo = a * m; hi = b * m; w = d.weeks(); }
  return { low: round500(lo), high: round500(hi), weeks: w };
}
function durText(w) {
  const t = CT[currentLang];
  if (w[0] >= 26) return Math.round(w[0] / 4.3) + '–' + Math.round(w[1] / 4.3) + ' ' + t.months;
  return w[0] + '–' + w[1] + ' ' + t.weeks;
}
function budgetBucket(r) {
  const mid = (r.low + r.high) / 2;
  return mid < 25000 ? 'Under €25K' : mid < 50000 ? '€25K – €50K' : mid < 100000 ? '€50K – €100K' : mid < 250000 ? '€100K – €250K' : '€250K+';
}
function calcSizeText(lang) {
  const t = CT[lang];
  if (CALC_TYPES[calc.type].unit === 'm2') return calc.area + ' m²';
  return t.sizes[calc.type][{ s: 0, m: 1, l: 2 }[calc.size]][0];
}
function renderCalc() {
  const el = document.getElementById('calcCard');
  if (!el) return;
  const t = CT[currentLang];
  const prog = '<div class="calc-progress">' + [1, 2, 3, 4].map(i => '<span class="' + (i <= calc.step ? 'on' : '') + '"></span>').join('') + '</div>';
  const opt = (sel, onclick, icon, title, sub) => '<button type="button" class="calc-opt' + (sel ? ' sel' : '') + '" onclick="' + onclick + '">' + (icon ? '<svg fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="' + icon + '"/></svg>' : '') + '<b>' + title + '</b><small>' + sub + '</small></button>';
  let html = prog;
  if (calc.step === 1) {
    html += '<div class="calc-step-label">' + t.step.replace('{n}', 1) + '</div><div class="calc-q">' + t.q1 + '</div><div class="calc-options">' +
      Object.keys(CALC_TYPES).map(k => opt(calc.type === k, "calcSet('type','" + k + "')", CALC_ICONS[k], t.types[k][0], t.types[k][1])).join('') +
      opt(false, "goEstimate('f_other')", 'M12 5v14M5 12h14', t.other[0], t.other[1]) + '</div>';
  } else if (calc.step === 2) {
    const d = CALC_TYPES[calc.type];
    if (d.unit === 'm2') {
      if (calc.area == null) calc.area = d.def;
      html += '<div class="calc-step-label">' + t.step.replace('{n}', 2) + '</div><div class="calc-q">' + t.q2area + '</div>' +
        '<div class="calc-area"><div class="calc-area-val"><span id="calcAreaVal">' + calc.area + '</span><small>' + t.area + '</small></div>' +
        '<input type="range" min="' + d.min + '" max="' + d.max + '" step="' + d.step + '" value="' + calc.area + '" oninput="calc.area=+this.value;document.getElementById(\'calcAreaVal\').textContent=this.value" aria-label="' + t.q2area + '">' +
        '<div class="calc-area-scale"><span>' + d.min + ' m²</span><span>' + d.max + ' m²</span></div></div>' +
        '<div class="calc-nav"><button type="button" class="calc-back" onclick="calcGo(1)">' + t.back + '</button><button type="button" class="btn btn-primary" onclick="calcGo(3)">' + t.next + '</button></div>';
    } else {
      html += '<div class="calc-step-label">' + t.step.replace('{n}', 2) + '</div><div class="calc-q">' + t.q2size + '</div><div class="calc-options calc-3">' +
        ['s', 'm', 'l'].map((k, i) => opt(calc.size === k, "calcSet('size','" + k + "')", '', t.sizes[calc.type][i][0], t.sizes[calc.type][i][1])).join('') + '</div>' +
        '<div class="calc-nav"><button type="button" class="calc-back" onclick="calcGo(1)">' + t.back + '</button></div>';
    }
  } else if (calc.step === 3) {
    html += '<div class="calc-step-label">' + t.step.replace('{n}', 3) + '</div><div class="calc-q">' + t.q3 + '</div><div class="calc-options calc-3">' +
      ['standard', 'premium', 'luxury'].map(k => opt(calc.finish === k, "calcSet('finish','" + k + "')", '', t.finish[k][0], t.finish[k][1])).join('') + '</div>' +
      '<div class="calc-nav"><button type="button" class="calc-back" onclick="calcGo(2)">' + t.back + '</button></div>';
  } else {
    const r = calcCompute();
    const price = eur(r.low) + ' – ' + eur(r.high);
    const dur = durText(r.weeks);
    const summary = t.summary.replace('{type}', t.types[calc.type][0]).replace('{size}', calcSizeText(currentLang)).replace('{finish}', t.finish[calc.finish][0]).replace('{price}', price).replace('{dur}', dur);
    lastCalc = { type: calc.type, area: calc.area, size: calc.size, finish: calc.finish, low: r.low, high: r.high, weeks: r.weeks, summary };
    if (window.btsTrack) btsTrack('calc_done', true);
    const waText = (currentLang === 'pt' ? 'Olá BTS! Fiz a estimativa no site: ' : 'Hi BTS! I used the cost calculator on your website: ') + summary + (currentLang === 'pt' ? '. Gostaria de um orçamento fechado.' : '. I would like a fixed quote.');
    const videoText = (currentLang === 'pt' ? 'Olá BTS! Gostaria de marcar uma visita gratuita por vídeo ao meu imóvel. Estimativa do site: ' : 'Hi BTS! I would like to book a free video visit of my property. Website estimate: ') + summary + (currentLang === 'pt' ? '.\nLocalização do imóvel: \nMelhores dias/horas: ' : '.\nProperty location: \nBest days/times: ');
    html += '<div class="calc-result"><div>' +
      '<div class="calc-price-label">' + t.priceLabel + '</div><div class="calc-price">' + price + '</div>' +
      '<div class="calc-meta"><div><span>' + t.project + '</span><b>' + t.types[calc.type][0] + ' · ' + calcSizeText(currentLang) + '</b></div>' +
      '<div><span>' + t.finishL + '</span><b>' + t.finish[calc.finish][0] + '</b></div>' +
      '<div><span>' + t.duration + '</span><b>' + dur + '</b></div></div>' +
      '<p class="calc-note">' + t.note + '</p></div>' +
      '<div><div class="calc-incl"><h4>' + t.includes + '</h4><ul>' + t.incl[calc.type].map(x => '<li>' + x + '</li>').join('') + '</ul></div>' +
      '<div class="calc-actions"><button type="button" class="btn btn-primary" onclick="calcToForm()">' + t.cta + '</button>' +
      '<a class="btn calc-wa" href="https://wa.me/351913965533?text=' + encodeURIComponent(waText) + '" target="_blank" rel="noopener">' + t.wa + '</a>' +
      '<a class="btn calc-video" href="https://wa.me/351913965533?text=' + encodeURIComponent(videoText) + '" target="_blank" rel="noopener">' + t.video + '</a><p class="calc-video-note">' + t.videoNote + '</p>' +
      '<button type="button" class="calc-back" onclick="calcReset()">' + t.again + '</button></div></div></div>';
  }
  el.innerHTML = html;
}
function calcSet(field, value) {
  calc[field] = value;
  if (field === 'type') { calc.area = null; calc.size = null; calc.step = 2; }
  else if (field === 'size') calc.step = 3;
  else if (field === 'finish') calc.step = 4;
  renderCalc();
}
function calcGo(step) { calc.step = step; renderCalc(); }
function calcReset() { Object.assign(calc, { step: 1, type: null, area: null, size: null, finish: null }); lastCalc = null; renderCalc(); }
function calcToForm() {
  if (!lastCalc) return;
  goEstimate(CALC_TYPES[lastCalc.type].service);
  showCalcChip();
  setTimeout(() => document.getElementById('c_name').focus({ preventScroll: true }), 600);
}
function showCalcChip() {
  const chip = document.getElementById('calcChip');
  if (!lastCalc) { chip.hidden = true; return; }
  chip.innerHTML = '<span><b>' + (currentLang === 'pt' ? 'A sua estimativa' : 'Your estimate') + ':</b> ' + lastCalc.summary + '</span>' +
    '<button type="button" onclick="lastCalc=null;showCalcChip()" aria-label="Remove">×</button>';
  chip.hidden = false;
}

// Page navigation
// Careers: a full section on the home page on computers, a separate page on phones
const mqPhone = window.matchMedia('(max-width: 768px)');
// Each page has its own web address (bts-grupo.com/careers/ …)
const PAGE_PATHS = { home: '/', works: '/services/', resolve: '/small-repairs/', careers: '/careers/', services: '/property-care/', privacy: '/privacy/', cookies: '/cookies/', complaints: '/complaints/' };
const PAGE_TITLES = { home: 'BTS — Building The Solution', works: 'Construction & Renovation Services — BTS', resolve: 'BTS Resolve — Small Repairs — BTS', careers: 'Careers — Construction Jobs in Northern Portugal — BTS', services: 'HomeCare Property Care Plans — BTS', privacy: 'Privacy Policy — BTS', cookies: 'Cookie Policy — BTS', complaints: 'Complaints Book — BTS' };
function pageFromPath(path) { const k = Object.keys(PAGE_PATHS).find(k => PAGE_PATHS[k] === path || PAGE_PATHS[k] === path + '/'); return k || null; }
let pageFromHistory = false;
function showPage(page, scrollTo) {
  if (!pageFromHistory && /^https?:$/.test(location.protocol)) {
    const path = PAGE_PATHS[page];
    if (path && location.pathname !== path) { try { history.pushState({ page: page }, '', path); } catch (e) { /* preview frames */ } }
  }
  if (PAGE_TITLES[page]) document.title = PAGE_TITLES[page];
  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  navHeroState();
  closeMenu();
  if (scrollTo) {
    requestAnimationFrame(() => {
      const el = document.getElementById(scrollTo);
      if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }
    });
  } else { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMenu() { mobileMenu.classList.remove('open'); }
const HASH_PAGES = { '#resolve': 'resolve', '#careers': 'careers', '#services': 'works', '#projects': 'home' };
function routeHash() { const pg = HASH_PAGES[location.hash]; const id = location.hash.slice(1); if (pg) showPage(pg, document.getElementById(id) ? id : undefined); }
function routePath() {
  const pg = pageFromPath(location.pathname);
  if (!pg) return;
  pageFromHistory = true;
  const id = location.hash.slice(1);
  if (pg !== 'home' || document.getElementById('page-' + pg).classList.contains('active') === false) showPage(pg, id && document.getElementById(id) ? id : undefined);
  pageFromHistory = false;
}
window.addEventListener('popstate', routePath);
function placeResolveLink() {
  const link = document.querySelector('.vx-content .hx-small');
  const careers = document.querySelector('.nav-links a[data-i18n="nav_careers"]');
  if (!link || !careers) return;
  if (window.innerWidth <= 760) { link.style.left = ''; return; }
  const box = link.parentElement.getBoundingClientRect();
  link.style.left = Math.round(careers.getBoundingClientRect().left - box.left) + 'px';
}
window.addEventListener('resize', placeResolveLink);
window.addEventListener('load', placeResolveLink);
document.fonts && document.fonts.ready.then(placeResolveLink);
function navHeroState() {
  const hero = document.querySelector('.vx-hero');
  const home = document.getElementById('page-home').classList.contains('active');
  document.body.classList.toggle('nav-hero', !!hero && home && window.scrollY < hero.offsetHeight - 110);
}
window.addEventListener('scroll', navHeroState, { passive: true });
navHeroState();
window.addEventListener('hashchange', routeHash);
// The first screen has its own WhatsApp and AI buttons: hide the floating ones while those are visible
if ('IntersectionObserver' in window) { const hb = document.querySelector('.hx-btns'); if (hb) new IntersectionObserver(es => { const home = document.getElementById('page-home').classList.contains('active'); document.body.classList.toggle('hero-cta-visible', home && es[0].isIntersecting); }).observe(hb); }
window.addEventListener('load', () => { const id = location.hash.slice(1); const el = id && document.getElementById(id); if (el && (HASH_PAGES[location.hash] || el.closest('.page-view.active'))) setTimeout(() => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'instant' }), 300); });
// In-page links (#contact, #calculator…) open the page that holds that section
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.hasAttribute('onclick')) return;
  const id = a.getAttribute('href').slice(1);
  if (!id || HASH_PAGES['#' + id]) return;
  const el = document.getElementById(id);
  const pv = el && el.closest('.page-view');
  if (!pv) return;
  e.preventDefault();
  showPage(pv.id.slice(5), id);
});
if (!HASH_PAGES[location.hash]) routePath();
routeHash();

// Show mobile lang toggle
const langMob = document.getElementById('langToggleMobile').parentElement;
langMob.style.display = window.innerWidth <= 760 ? 'block' : 'none';
window.addEventListener('resize', () => { langMob.style.display = window.innerWidth <= 760 ? 'block' : 'none'; });

// ── AI assistant (demo) ──
// Runs through the viewer's own Claude account when the page is opened inside claude.ai
// (capability "sample"). Anywhere else the button stays hidden.
let aiSample = null, aiTools = false, aiBusy = false, aiCtl = null, aiKnowledge = '';
const AI_ENDPOINT = (window.BTS_CONFIG && window.BTS_CONFIG.aiEndpoint) || 'api/chat';
let aiMode = null;          // 'gemini' = the site's own server (/api/chat), 'claude' = demo inside claude.ai
const aiTurns = [];         // plain transcript (for the WhatsApp hand-off)
const aiGem = [];           // Gemini conversation (text, function calls and results)
const AI_CHIPS = {
  en: [['Renovation', 'I want to renovate a property. What are the first steps and what does it cost?'], ['Small repair', { page: 'resolve' }], ['Maintenance plan', 'Which care plan suits my property?'], ['I live abroad', 'I live abroad — how does it work?'], ['Jobs', 'Are you hiring?']],
  pt: [['Remodelação', 'Quero remodelar um imóvel. Quais são os primeiros passos e quanto custa?'], ['Pequena reparação', { page: 'resolve' }], ['Plano de manutenção', 'Que plano de manutenção serve para o meu imóvel?'], ['Vivo no estrangeiro', 'Vivo no estrangeiro — como funciona?'], ['Emprego', 'Estão a recrutar?']]
};
const AI_COPY = {
  en: { thinking: 'Thinking…', off: 'The AI assistant is not available here. Please use the form or WhatsApp.', busy: 'Too many questions right now — please try again in a minute.', refused: 'I can\'t help with that one. Please contact our team on WhatsApp.', error: 'Something went wrong. Please try again, or message us on WhatsApp.', formDone: 'Form opened and pre-filled', jobDone: 'Job application opened', shown: 'Showing: ' },
  pt: { thinking: 'A pensar…', off: 'O assistente de IA não está disponível aqui. Use o formulário ou o WhatsApp.', busy: 'Demasiadas perguntas neste momento — tente de novo daqui a um minuto.', refused: 'Não posso ajudar com isso. Contacte a nossa equipa no WhatsApp.', error: 'Algo correu mal. Tente de novo ou escreva-nos no WhatsApp.', formDone: 'Formulário aberto e preenchido', jobDone: 'Candidatura aberta', shown: 'A mostrar: ' }
};
(async function aiInit() {
  // 1) The site's own AI server (Cloudflare _worker.js + Gemini) — works for every visitor
  try {
    const r = await fetch(AI_ENDPOINT, { method: 'GET', headers: { accept: 'application/json' } });
    const j = r.ok ? await r.json() : null;
    if (j && j.ok) { aiMode = 'gemini'; aiTools = true; aiEnable(); return; }
  } catch (err) { /* no server here */ }
  // 2) Demo inside claude.ai, on the viewer's own Claude account
  if (!window.claude || typeof window.claude.use !== 'function') return;
  try { aiSample = await window.claude.use('sample'); } catch (err) { aiSample = null; }
  if (!aiSample) return;
  try { const lim = await aiSample.limits(); aiTools = !!(lim && lim.tools); } catch (err) { aiTools = false; }
  aiMode = 'claude';
  aiEnable();
})();
function aiEnable() {
  document.getElementById('aiFab').hidden = false;
  document.getElementById('footerAi').hidden = false;
  document.querySelectorAll('.ai-entry').forEach(el => { el.hidden = false; });
  document.getElementById('aiBuddy').hidden = false;
  let seen = false;
  try { seen = localStorage.getItem('btsBuddy') === '1'; } catch (err) { /* storage blocked */ }
  const showBubble = () => {
    if (!document.getElementById('aiPanel').hidden || window.scrollY > 120) return;
    document.getElementById('aiBuddyBubble').hidden = false;
    if (window.innerWidth <= 768) setTimeout(() => { document.getElementById('aiBuddyBubble').hidden = true; }, 12000);
  };
  // Greet only after the visitor scrolls past the first screen, so the bubble never covers its buttons
  const onScroll = () => { if (window.scrollY > window.innerHeight * 0.8) { window.removeEventListener('scroll', onScroll); setTimeout(showBubble, 600); } };
  if (!seen) window.addEventListener('scroll', onScroll, { passive: true });
  aiRenderChips();
}
function buddyDismiss() {
  document.getElementById('aiBuddyBubble').hidden = true;
  try { localStorage.setItem('btsBuddy', '1'); } catch (err) { /* storage blocked */ }
}
function aiToggle(open) {
  const panel = document.getElementById('aiPanel');
  const show = open === undefined ? panel.hidden : open;
  panel.hidden = !show;
  document.getElementById('aiFab').hidden = show || !aiMode;
  document.getElementById('aiBuddy').hidden = show || !aiMode;
  if (show) buddyDismiss();
  if (show && window.innerWidth > 768) setTimeout(() => document.getElementById('aiText').focus(), 50);
}
function aiRenderChips() {
  const box = document.getElementById('aiChips');
  if (!box) return;
  box.hidden = aiTurns.length > 0;
  box.innerHTML = '';
  (AI_CHIPS[currentLang] || AI_CHIPS.en).forEach(([label, act]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ai-chip'; b.textContent = label;
    b.onclick = () => {
      if (typeof act === 'string') { if (!aiBusy) aiAsk(act); }
      else { aiToggle(false); showPage(act.page); }
    };
    box.appendChild(b);
  });
}
function aiMd(s) {
  const esc = x => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = x => esc(x).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  const out = []; let list = null;
  for (const raw of String(s).split('\n')) {
    const line = raw.trim();
    const m = line.match(/^[-*•]\s+(.*)$/) || line.match(/^\d+[.)]\s+(.*)$/);
    if (m) { (list = list || []).push('<li>' + inline(m[1]) + '</li>'); continue; }
    if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; }
    if (line) out.push('<p>' + inline(line.replace(/^#+\s*/, '')) + '</p>');
  }
  if (list) out.push('<ul>' + list.join('') + '</ul>');
  return out.join('');
}
function aiScroll() { const m = document.getElementById('aiMsgs'); m.scrollTop = m.scrollHeight; }
function aiAdd(kind, html, extraClass) {
  const row = document.createElement('div');
  row.className = 'ai-msg ' + (kind === 'user' ? 'ai-user' : 'ai-bot');
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble' + (extraClass ? ' ' + extraClass : '');
  if (kind === 'user') bubble.textContent = html; else bubble.innerHTML = html;
  row.appendChild(bubble);
  document.getElementById('aiMsgs').appendChild(row);
  aiScroll();
  return bubble;
}
function aiNote(text) {
  const n = document.createElement('div');
  n.className = 'ai-action'; n.textContent = text;
  document.getElementById('aiMsgs').appendChild(n);
  aiScroll();
}
function aiSetBusy(on) {
  aiBusy = on;
  document.getElementById('aiSend').hidden = on;
  document.getElementById('aiStop').hidden = !on;
}
function aiStopNow() { if (aiCtl) aiCtl.abort(); }
function aiUpdateHuman() {
  const lines = aiTurns.slice(-6).map(t => (t.role === 'user' ? (currentLang === 'pt' ? 'Eu: ' : 'Me: ') : 'Assistant: ') + t.content.replace(/\*\*/g, '').replace(/\s+/g, ' ').slice(0, 300));
  const head = currentLang === 'pt' ? 'Olá BTS! Estive a falar com o assistente do site:' : 'Hi BTS! I was chatting with the assistant on your website:';
  const text = (head + '\n' + lines.join('\n')).slice(0, 1500);
  document.getElementById('aiHuman').href = 'https://wa.me/351913965533?text=' + encodeURIComponent(text);
}
function aiNorm(s) { return String(s || '').replace(/[ \t ]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim(); }
function aiKnowledgeBuild() {
  const txt = (sel, max) => { const el = document.querySelector(sel); return el ? aiNorm(el.textContent).slice(0, max) : ''; };
  const faq = (faqData.en || []).map(f => 'Q: ' + f.q + '\nA: ' + f.a).join('\n');
  return [
    '## Company\nBlame The Stars, Lda. (brand: BTS — Building The Solution), NIF 518103900, IMPIC licence (alvará) no. 115511 - PUB, office at Rua Professor José Lacerda, n.º 19, 5050-081 Godim, Peso da Régua. IMPIC-licensed and insured construction company in Northern Portugal: Aveiro, Porto, Douro Valley, Braga, Viseu. Phone +351 933 255 248. WhatsApp +351 91 396 55 33. Email geral@bts-grupo.com. Replies to enquiries within 48 hours, Monday–Saturday. Free site visit; video site assessment for owners who are abroad. Fixed, written, itemised quote. Bilingual (English/Portuguese) project manager. Weekly photo and video updates.',
    '## Services\n' + txt('#services', 3000),
    '## Why clients choose us\n' + txt('#about', 2500),
    '## Frequently asked questions\n' + faq,
    '## HomeCare subscription plans (full guide)\n' + txt('#page-services', 15000),
    '## Careers (open vacancies)\n' + txt('#careers .cr-jobs', 4000),
    '## BTS Resolve (small repairs service)\n' + txt('#page-resolve', 3000)
  ].join('\n\n');
}
function aiRules() {
  const toolRules = aiTools
    ? '- Small repairs and fixes are the BTS Resolve service: a leak (bathroom, kitchen, pipe, roof), a dripping tap, a blocked drain, a broken toilet, a socket or light that does not work, a fuse problem, broken roof tiles or gutters, a damp stain, painting a wall or ceiling, a door or window that sticks, broken tiles, small garden work, or any other maintenance job. For these NEVER call estimate_cost and NEVER give any euro amount or price range. Say the price depends on the problem and BTS confirms it after seeing photos, before any work starts. Ask the visitor to send a photo on WhatsApp +351 91 396 55 33 or to use the form on the BTS Resolve page (call show_section with section resolve). Resolve areas: Douro Valley, Aveiro, Porto.\n- Call estimate_cost only for whole projects: a full renovation, a completely new kitchen or bathroom, a new roof, a pool, a new house or a facade. Give the range it returns. If it is unclear whether the visitor needs a repair or a whole project, ask one short question first (for example: is it a repair, or a complete renovation?).\n- When the visitor wants a quote, a site visit or to be contacted: ask for their name and phone or email (and property location if unknown), then call open_estimate_form with what they told you. Then tell them to check the form, tick the consent box and press Send.\n- For job questions, explain the vacancy; if they want to apply, call open_job_application.\n- Pay for workers and subcontractors: NEVER state, suggest or estimate any wage, hourly rate or price per m2 that BTS pays, for any trade. Ask the applicant how much they propose instead. For drywall / pladur / LSF work ask for their price per m2 (and whether it includes materials or labour only); for other trades ask their expected daily or monthly rate. Say the team will review their proposal and call them back. When you call open_job_application, put the proposal they gave in proposed_rate.\n- Use show_section when it helps the visitor to see something on the page.\n'
    : '- For prices, point the visitor to the cost calculator on the page and to a free site visit; do not invent numbers.\n';
  return 'You are the assistant on the website of BTS (Blame The Stars, Lda.), a construction and renovation company in Northern Portugal. You chat with website visitors.\n' +
    'Rules:\n' +
    '- Always answer in the language the visitor writes in (English, Portuguese or any other).\n' +
    '- Be warm and brief: 2–5 short sentences or a short list. Plain text, no tables, no headings.\n' +
    '- Use ONLY the company information below. If a detail is not there (years in business, number of projects, availability dates, exact prices, specific people), say you do not have that detail and offer to connect them with the team.\n' +
    '- All prices are indicative market ranges, VAT excluded. Always say BTS confirms a fixed written quote after a free site visit or video assessment. Never promise a final price, dates, legal or tax outcomes.\n' +
    toolRules +
    '- Never ask for sensitive data (health, ID or bank details).\n' +
    '- If they want a person: WhatsApp +351 91 396 55 33 or phone +351 933 255 248.\n' +
    '- If asked, say you are an AI assistant.\n\n' +
    'COMPANY INFORMATION:\n' + aiKnowledge;
}
function aiEstimate(i) {
  const type = String(i.type || '');
  const d = CALC_TYPES[type];
  if (!d) throw new Error('Unknown project type. Use one of: ' + Object.keys(CALC_TYPES).join(', '));
  const finish = ['standard', 'premium', 'luxury'].includes(i.finish) ? i.finish : 'standard';
  let lo, hi, w, sizeText;
  if (d.unit === 'm2') {
    const area = Math.min(d.max, Math.max(d.min, Math.round(Number(i.area_m2) || d.def)));
    const [a, b] = d.perM2[finish]; lo = a * area; hi = b * area; w = d.weeks(area); sizeText = area + ' m²';
  } else {
    const size = ['s', 'm', 'l'].includes(i.size) ? i.size : 'm';
    const [a, b] = d.sizes[size]; lo = a * d.mult[finish]; hi = b * d.mult[finish]; w = d.weeks(); sizeText = { s: 'small', m: 'medium', l: 'large' }[size];
  }
  return { project: type, size: sizeText, finish, low_eur: round500(lo), high_eur: round500(hi), weeks_min: w[0], weeks_max: w[1], note: 'Indicative range for Northern Portugal, labour and materials, VAT not included.' };
}
const AI_SERVICE_KEYS = { renovation: 'f_opt_reno', newbuild: 'f_opt_new', kitchen_bathroom: 'f_opt_kb', roofing: 'f_opt_roof', pool: 'f_opt_pool', landscaping: 'f_opt_land', infrastructure: 'f_opt_infra', homecare: 'f_opt_care', other: 'f_other' };
function aiOpenForm(i) {
  goEstimate(AI_SERVICE_KEYS[i.project_type] || null);
  const set = (id, v) => { if (v) document.getElementById(id).value = String(v).slice(0, 1000); };
  set('c_name', i.name); set('c_email', i.email); set('c_phone', i.phone); set('c_desc', i.description);
  if (i.location) {
    const s = document.getElementById('c_location');
    const idx = Array.from(s.options).findIndex(o => o.text === i.location);
    if (idx > 0) s.selectedIndex = idx; else selectByKey('c_location', 'f_other');
  }
  aiNote('📝 ' + AI_COPY[currentLang].formDone);
  if (window.innerWidth <= 480) aiToggle(false);
  return 'The estimate form is now open on the page and pre-filled. The visitor must review it, tick the consent box and press Send.';
}
function aiOpenJob(i) {
  const pos = ['pedreiro', 'cofragem', 'pladur', 'ferrageiro', 'outro'].includes(i.position) ? i.position : 'outro';
  applyFor(pos);
  if (i.name) document.getElementById('a_name').value = String(i.name).slice(0, 200);
  if (i.phone) document.getElementById('a_phone').value = String(i.phone).slice(0, 60);
  if (i.proposed_rate) { const m = document.getElementById('a_msg'); m.value = ((currentLang === 'pt' ? 'Preço proposto: ' : 'Proposed rate: ') + String(i.proposed_rate).slice(0, 200) + (m.value ? '\n' + m.value : '')); }
  aiNote('📝 ' + AI_COPY[currentLang].jobDone);
  if (window.innerWidth <= 480) aiToggle(false);
  return 'The job application form is open and pre-filled with what the visitor gave. They complete it, tick consent and send it.';
}
function aiShow(i) {
  if (i.section === 'calculator') { openCalcModal(); aiNote('👀 ' + AI_COPY[currentLang].shown + 'calculator'); return 'Calculator opened.'; }
  const map = { calculator: ['works', 'calculator'], care_plans: ['services'], projects: ['home', 'projects'], careers: ['careers'], contact: ['home', 'contact'], faq: ['works', 'faq'], resolve: ['resolve'] };
  const target = map[i.section];
  if (!target) throw new Error('Unknown section');
  showPage(target[0], target[1]);
  aiNote('👀 ' + AI_COPY[currentLang].shown + i.section.replace('_', ' '));
  return 'Section shown.';
}
function aiToolList() {
  return [
    { name: 'estimate_cost',
      description: 'Indicative price range in EUR (VAT excluded) and typical duration for a project in Northern Portugal, from the same table as the website cost calculator. ONLY for whole projects, never for repairs or small jobs (those are BTS Resolve, no price before photos). Returns {low_eur, high_eur, weeks_min, weeks_max}.',
      inputSchema: { type: 'object', properties: {
        type: { type: 'string', enum: Object.keys(CALC_TYPES), description: 'renovation = full interior renovation of a house or flat; newbuild = new house; facade = facade and exterior' },
        area_m2: { type: 'number', description: 'Area in m² — for renovation, newbuild, roof, facade' },
        size: { type: 'string', enum: ['s', 'm', 'l'], description: 'For kitchen, bathroom, pool: s = small, m = medium, l = large' },
        finish: { type: 'string', enum: ['standard', 'premium', 'luxury'] } }, required: ['type'] },
      execute: i => aiEstimate(i) },
    { name: 'open_estimate_form',
      description: 'Opens the estimate request form on the page and pre-fills what the visitor told you. The visitor still reviews it, ticks consent and presses Send. Returns a confirmation.',
      inputSchema: { type: 'object', properties: {
        name: { type: 'string' }, email: { type: 'string' }, phone: { type: 'string' },
        location: { type: 'string', enum: ['Aveiro', 'Porto', 'Douro Valley', 'Braga', 'Viseu', 'Other'] },
        project_type: { type: 'string', enum: Object.keys(AI_SERVICE_KEYS) },
        description: { type: 'string', description: 'Short summary of the project in the visitor\'s words, including any estimate you gave' } } },
      execute: i => aiOpenForm(i) },
    { name: 'open_job_application',
      description: 'Opens the job application form for a vacancy and pre-fills name and phone if given. pedreiro = stonemason, cofragem = formwork carpenter, pladur = drywall / plasterboard / LSF installer, ferrageiro = rebar fixer (armador de ferro), outro = other trade.',
      inputSchema: { type: 'object', properties: { position: { type: 'string', enum: ['pedreiro', 'cofragem', 'pladur', 'ferrageiro', 'outro'] }, name: { type: 'string' }, phone: { type: 'string' }, proposed_rate: { type: 'string', description: "The applicant's own price proposal, e.g. '12 €/m2, labour only'" } }, required: ['position'] },
      execute: i => aiOpenJob(i) },
    { name: 'show_section',
      description: 'Scrolls the website to a section so the visitor can see it.',
      inputSchema: { type: 'object', properties: { section: { type: 'string', enum: ['calculator', 'care_plans', 'projects', 'careers', 'contact', 'faq', 'resolve'] } }, required: ['section'] },
      execute: i => aiShow(i) }
  ];
}
function aiSubmit(e) {
  if (e) e.preventDefault();
  const box = document.getElementById('aiText');
  const q = box.value.trim();
  if (!q || aiBusy || !aiMode) return;
  box.value = '';
  aiAsk(q);
}
async function aiAsk(q) {
  const copy = AI_COPY[currentLang] || AI_COPY.en;
  aiTurns.push({ role: 'user', content: q.slice(0, 1500) });
  document.getElementById('aiChips').hidden = true;
  aiAdd('user', q);
  const bubble = aiAdd('bot', copy.thinking, 'thinking');
  aiSetBusy(true);
  if (aiMode === 'gemini') { await aiAskGemini(q, bubble, copy); return; }
  if (!aiKnowledge) aiKnowledge = aiKnowledgeBuild();
  aiCtl = new AbortController();
  const input = [{ role: 'user', content: aiRules() }, ...aiTurns.slice(-12)];
  const opts = {
    signal: aiCtl.signal, modelTier: 'quick',
    onText: ({ text }) => { bubble.classList.remove('thinking'); bubble.innerHTML = aiMd(text); aiScroll(); }
  };
  if (aiTools) opts.tools = aiToolList(); else opts.cache = false;
  try {
    const res = await aiSample(input, opts);
    bubble.classList.remove('thinking');
    bubble.innerHTML = aiMd(res.text);
    aiTurns.push({ role: 'assistant', content: res.text });
  } catch (err) {
    const code = err && err.code;
    bubble.classList.remove('thinking');
    if (err && err.text && code !== 'refused') {
      bubble.innerHTML = aiMd(err.text);
      aiTurns.push({ role: 'assistant', content: err.text });
    } else if (code === 'cancelled') {
      bubble.parentElement.remove();
    } else if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(code)) {
      bubble.textContent = copy.off;
      document.getElementById('aiText').disabled = true;
      document.getElementById('aiSend').disabled = true;
    } else if (code === 'rate_limited') {
      bubble.textContent = copy.busy;
    } else if (code === 'refused') {
      bubble.textContent = copy.refused;
    } else {
      bubble.textContent = copy.error;
    }
  } finally {
    aiSetBusy(false);
    aiUpdateHuman();
    aiScroll();
  }
}

const AI_TOOL_IMPL = { estimate_cost: aiEstimate, open_estimate_form: aiOpenForm, open_job_application: aiOpenJob, show_section: aiShow };
// Keep whole exchanges, so a function call is never separated from its result
function aiGemTrim() {
  const isUserText = c => c.role === 'user' && c.parts.some(p => typeof p.text === 'string');
  while (aiGem.length > 24) {
    aiGem.shift();
    while (aiGem.length && !isUserText(aiGem[0])) aiGem.shift();
  }
}
async function aiAskGemini(q, bubble, copy) {
  aiGem.push({ role: 'user', parts: [{ text: q.slice(0, 1500) }] });
  aiCtl = new AbortController();
  let finalText = '';
  try {
    for (let round = 0; round < 4; round++) {
      aiGemTrim();
      const res = await fetch(AI_ENDPOINT, {
        method: 'POST', signal: aiCtl.signal,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ lang: currentLang, contents: aiGem })
      });
      if (!res.ok) throw { code: res.status === 429 ? 'rate_limited' : res.status === 503 ? 'not_granted' : 'upstream_error' };
      const data = await res.json();
      if (data.blocked) throw { code: 'refused' };
      if (data.content) aiGem.push(data.content);
      if (data.text) { bubble.classList.remove('thinking'); bubble.innerHTML = aiMd(data.text); aiScroll(); finalText = data.text; }
      if (!data.calls || !data.calls.length) break;
      const results = [];
      for (const call of data.calls) {
        let out;
        try { out = AI_TOOL_IMPL[call.name](call.args || {}); }
        catch (err) { out = { error: String(err && err.message || err) }; }
        results.push({ functionResponse: { name: call.name, response: (out && typeof out === 'object') ? out : { result: String(out) } } });
      }
      aiGem.push({ role: 'user', parts: results });
    }
    if (!finalText) throw { code: 'empty_completion' };
    aiTurns.push({ role: 'assistant', content: finalText });
  } catch (err) {
    const code = err && (err.code || (err.name === 'AbortError' ? 'cancelled' : null));
    bubble.classList.remove('thinking');
    // drop the unanswered question so the conversation stays valid
    while (aiGem.length && aiGem[aiGem.length - 1].role === 'user') aiGem.pop();
    if (code === 'cancelled') bubble.parentElement.remove();
    else if (code === 'not_granted') bubble.textContent = copy.off;
    else if (code === 'rate_limited') bubble.textContent = copy.busy;
    else if (code === 'refused') bubble.textContent = copy.refused;
    else bubble.textContent = copy.error;
  } finally {
    aiSetBusy(false);
    aiUpdateHuman();
    aiScroll();
  }
}

// Keep the WhatsApp button above the footer's bottom strip
(function () {
  const fab = document.querySelector('.fab-stack');
  const strip = document.querySelector('.footer-bottom');
  if (!fab || !strip) return;
  let queued = false;
  function place() {
    queued = false;
    const overlap = window.innerHeight - strip.getBoundingClientRect().top;
    fab.style.bottom = overlap > 0 ? (overlap + 16) + 'px' : '';
    const footerTop = document.querySelector('.footer').getBoundingClientRect().top;
    document.body.classList.toggle('footer-in-view', footerTop < window.innerHeight - 60);
  }
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(place); } };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  place();
})();

// Before/After slider
const baRange = document.getElementById('baRange');
const baBefore = document.getElementById('baBefore');
const baHandle = document.getElementById('baHandle');
if (baRange) baRange.addEventListener('input', () => { baBefore.style.clipPath = `inset(0 ${100 - baRange.value}% 0 0)`; baHandle.style.left = baRange.value + '%'; });

// Homepage FAQ
const faqData = {
  en: [
    { q: 'Which areas do you cover?', a: 'Northern Portugal: Aveiro, Porto and the Douro Valley, and also Braga and Viseu. Small repairs (BTS Resolve) cover the Douro Valley, Aveiro and Porto. Tell us where the property is and we confirm.' },
    { q: 'Can you assess my property if I live abroad?', a: 'Yes. The site visit is free, and we can do the assessment by video call so you do not need to travel. You receive the written quote by email and follow the work through weekly photo and video updates.' },
    { q: 'How long does a typical project take?', a: 'It depends on the scope: a kitchen or bathroom about 2–6 weeks, a full house renovation 3–6 months, a new build 8–14 months. Your written quote includes the planned timeline.' },
    { q: 'What happens if unexpected work is found?', a: 'Old buildings sometimes hide problems, such as rotten beams or damaged pipes behind walls. We stop, show you photos and send a separate written variation with the price. Nothing is done or charged without your approval.' },
    { q: 'Do you give a warranty on your work?', a: 'Yes. Our work is covered by the legal warranty under Portuguese law, and the terms are written in your quote. If a defect appears that is our responsibility, we come back and repair it at no cost.' },
    { q: 'How does pricing work?', a: 'After a free site visit or video assessment, we send a detailed written quote with itemised costs. The price for the agreed work is what you pay — no hidden charges, no pressure.' },
    { q: 'Are you a licensed contractor?', a: 'Yes. We hold IMPIC licence (alvará) n.º 115511 - PUB under Portuguese construction law, and we are fully insured.' },
    { q: 'What services do you offer?', a: 'New builds, full renovations, restoration of old stone houses, kitchens and bathrooms, roofs and waterproofing, pools, masonry and retaining walls, small repairs (BTS Resolve) and HomeCare maintenance plans.' },
    { q: 'Can I visit the site during construction?', a: 'Yes, you are welcome on site at any time. If you are abroad, we schedule video walkthroughs and send photos every week.' }
  ],
  pt: [
    { q: 'Que zonas cobrem?', a: 'Norte de Portugal: Aveiro, Porto e Vale do Douro, e também Braga e Viseu. As pequenas reparações (BTS Resolve) cobrem o Vale do Douro, Aveiro e Porto. Diga-nos onde fica o imóvel e confirmamos.' },
    { q: 'Podem avaliar o meu imóvel se eu viver no estrangeiro?', a: 'Sim. A visita é gratuita e podemos fazer a avaliação por videochamada, sem precisar de viajar. Recebe o orçamento escrito por email e acompanha a obra com fotos e vídeos todas as semanas.' },
    { q: 'Quanto tempo demora uma obra típica?', a: 'Depende do âmbito: cozinha ou casa de banho cerca de 2–6 semanas, renovação completa de moradia 3–6 meses, construção nova 8–14 meses. O orçamento escrito inclui o prazo previsto.' },
    { q: 'E se surgirem trabalhos imprevistos?', a: 'Os edifícios antigos escondem por vezes problemas, como vigas podres ou canos danificados atrás das paredes. Paramos, mostramos-lhe fotografias e enviamos uma alteração escrita à parte com o preço. Nada é feito nem cobrado sem a sua aprovação.' },
    { q: 'Dão garantia dos trabalhos?', a: 'Sim. Os nossos trabalhos têm a garantia prevista na lei portuguesa, e as condições constam do seu orçamento. Se surgir um defeito da nossa responsabilidade, voltamos e reparamos sem custos.' },
    { q: 'Como funciona o preço?', a: 'Após uma visita gratuita ou avaliação por vídeo, enviamos um orçamento escrito detalhado com custos discriminados. O preço dos trabalhos acordados é o que paga — sem custos ocultos, sem pressão.' },
    { q: 'São um empreiteiro licenciado?', a: 'Sim. Temos o alvará IMPIC n.º 115511 - PUB ao abrigo da lei portuguesa da construção e estamos totalmente segurados.' },
    { q: 'Que serviços oferecem?', a: 'Construção nova, renovações completas, restauro de casas de pedra antigas, cozinhas e casas de banho, coberturas e impermeabilização, piscinas, alvenaria e muros de contenção, pequenas reparações (BTS Resolve) e planos de manutenção HomeCare.' },
    { q: 'Posso visitar a obra durante a construção?', a: 'Sim, é bem-vindo na obra a qualquer momento. Se estiver no estrangeiro, marcamos visitas por vídeo e enviamos fotografias todas as semanas.' }
  ]
};

function buildFAQ() {
  const list = document.getElementById('faqList');
  list.innerHTML = '';
  (faqData[currentLang] || faqData.en).forEach(f => {
    const el = document.createElement('div');
    el.style.cssText = 'border:1px solid var(--border);border-radius:6px;overflow:hidden;';
    el.innerHTML = `<button onclick="this.parentElement.classList.toggle('faq-open');this.querySelector('svg').style.transform=this.parentElement.classList.contains('faq-open')?'rotate(45deg)':'';const c=this.nextElementSibling;c.style.maxHeight=this.parentElement.classList.contains('faq-open')?c.scrollHeight+'px':'0'" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:var(--surface);border:none;cursor:pointer;font-family:var(--font-body);font-size:0.9rem;font-weight:600;color:var(--text);text-align:left;gap:12px;"><span>${f.q}</span><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;transition:transform 0.2s;"><path d="M12 5v14m-7-7h14"/></svg></button><div style="max-height:0;overflow:hidden;transition:max-height 0.3s ease;"><div style="padding:0 20px 16px;font-size:0.88rem;color:var(--text-soft);line-height:1.7;">${f.a}</div></div>`;
    list.appendChild(el);
  });
  const items = Array.from(list.children);
  if (items.length > 5 && !window.faqAll) {
    items.slice(5).forEach(x => { x.hidden = true; });
    const more = document.createElement('button');
    more.type = 'button'; more.className = 'faq-more'; more.textContent = T.faq_more[currentLang];
    more.onclick = () => { window.faqAll = true; buildFAQ(); };
    list.appendChild(more);
  }
}

// SP FAQ
const spFaqData = {
  en: [
    { q: 'What happens if something breaks between inspections?', a: 'Call or send a WhatsApp message (an email does not count for emergencies). Essential Care: a technician visits on the next business day. Active Host and Grand Quinta Care: a technician arrives on site within 2–4 hours of your report, the exact time agreed in your contract according to the property location.' },
    { q: 'Do unused handyman hours roll over?', a: 'No. Hours reset each billing cycle. Your estate manager will proactively suggest preventive tasks to maximise your plan\'s value.' },
    { q: 'Who pays for materials?', a: 'You do, but only at cost. We never mark up materials. Supplier receipts provided with every invoice.' },
    { q: 'What if I need a major renovation?', a: 'We handle major works as separate quoted projects. Labour at member rate, materials at cost. Grand Quinta members receive project management at no additional fee.' },
    { q: 'Why is NIF-registered invoicing important?', a: 'Under Portuguese tax law, properly registered invoices for maintenance can be deducted from Capital Gains Tax when you sell.' },
    { q: 'What is AICCOPN Class-2 certification?', a: 'AICCOPN is Portugal\'s construction industry association. Class-2 certifies workers are qualified for residential work with insurance and safety compliance.' },
    { q: 'How quickly can I start?', a: 'Within 2 weeks. We schedule an initial property assessment (free), establish the baseline condition, and your subscription begins.' },
    { q: 'Do you cover properties outside the Douro Valley?', a: 'Yes. Our HomeCare plans serve Aveiro, Porto, Douro Valley, Braga, and Viseu. Other areas considered case-by-case.' }
  ],
  pt: [
    { q: 'O que acontece se algo avariar entre inspeções?', a: 'Ligue ou envie mensagem por WhatsApp (um email não conta para emergências). Essential Care: um técnico desloca-se no próximo dia útil. Active Host e Grand Quinta Care: um técnico chega ao local em 2–4 horas após a comunicação, com o tempo exato acordado no contrato conforme a localização do imóvel.' },
    { q: 'As horas de faz-tudo não utilizadas transitam?', a: 'Não. As horas reiniciam a cada ciclo de faturação. O seu gestor irá proativamente sugerir tarefas preventivas para maximizar o valor do seu plano.' },
    { q: 'Quem paga os materiais?', a: 'O cliente, mas apenas ao custo. Nunca aplicamos margem nos materiais. Recibos do fornecedor incluídos em cada fatura.' },
    { q: 'E se precisar de uma grande renovação?', a: 'Tratamos obras maiores como projetos orçamentados separadamente. Mão-de-obra à tarifa de membro, materiais ao custo. Membros Grand Quinta recebem gestão de projeto sem custo adicional.' },
    { q: 'Porque é importante a faturação registada com NIF?', a: 'Ao abrigo da lei fiscal portuguesa, faturas devidamente registadas para manutenção podem ser deduzidas do Imposto sobre Mais-Valias quando vender.' },
    { q: 'O que é a certificação AICCOPN Classe 2?', a: 'A AICCOPN é a associação da indústria da construção portuguesa. Classe 2 certifica que os trabalhadores são qualificados para trabalho residencial com seguro e conformidade de segurança.' },
    { q: 'Com que rapidez posso começar?', a: 'Em 2 semanas. Agendamos uma avaliação inicial da propriedade (gratuita), estabelecemos o estado base, e a sua subscrição começa.' },
    { q: 'Cobrem propriedades fora do Vale do Douro?', a: 'Sim. Os nossos planos HomeCare servem Aveiro, Porto, Vale do Douro, Braga e Viseu. Outras áreas são analisadas caso a caso.' }
  ]
};

function buildSPFAQ() {
  const list = document.getElementById('spFaqList');
  if (!list) return;
  list.innerHTML = '';
  (spFaqData[currentLang] || spFaqData.en).forEach(f => {
    const el = document.createElement('div');
    el.className = 'sp-faq-item';
    el.innerHTML = `<button class="sp-faq-q" onclick="this.parentElement.classList.toggle('open')">${f.q}</button><div class="sp-faq-a">${f.a}</div>`;
    list.appendChild(el);
  });
}

// Services page nav
function spScrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const navH = 72 + (document.querySelector('.sp-plan-nav')?.offsetHeight || 0);
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 8, behavior: 'smooth' });
  }
  document.querySelectorAll('.sp-plan-nav-btn').forEach(b => b.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

const spObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      document.querySelectorAll('.sp-plan-nav-btn').forEach(b => {
        const txt = b.textContent.toLowerCase();
        b.classList.toggle('active',
          (id === 'sp-essential' && txt.includes('essential')) ||
          (id === 'sp-active' && txt.includes('active')) ||
          (id === 'sp-grand' && txt.includes('grand')) ||
          (id === 'sp-compare' && txt.includes('compar')) ||
          (id === 'sp-faq' && txt.includes('faq'))
        );
      });
    }
  });
}, { rootMargin: '-80px 0px -60% 0px' });
document.querySelectorAll('.sp-plan, .sp-compare, .sp-faq').forEach(s => spObs.observe(s));

// Init
buildFAQ();
buildSPFAQ();
renderCalc();
