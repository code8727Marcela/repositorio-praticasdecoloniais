/* =========================================================
   Repositório Decolonial — lógica
   Dados (R = materiais, T = temáticas) estão logo abaixo.
   Para adicionar um material, inclua um objeto em R:
   { e:"afro", t:"Artigo", h:"Título", a:"Autoria", y:"2025", s:"Fonte", d:"Resumo curto", u:"https://link" }
   (e = chave da temática, veja T; u2/l1/l2 = segundo link opcional)
   IMAGEM (só cards de podcast): acrescente img:"imagens/nome-do-arquivo.jpg" ao objeto do episódio.
   ========================================================= */

const R = [
  {"e": "cientistas", "t": "Perfil", "h": "Alice Ball (1892–1916)", "d": "Desenvolveu um método para tornar o óleo de chaulmoogra injetável, usado no tratamento da hanseníase durante décadas.", "s": "Química · EUA"},
  {"e": "cientistas", "t": "Perfil", "h": "Percy Lavon Julian (1899–1975)", "d": "Pesquisou a síntese de substâncias medicinais a partir de plantas, entre elas precursores de hormônios obtidos da soja.", "s": "Química · EUA"},
  {"e": "cientistas", "t": "Perfil", "h": "Marie Maynard Daly (1921–2003)", "d": "Em 1947, foi a primeira mulher negra a obter doutorado em Química nos Estados Unidos. Estudou o núcleo celular e o colesterol.", "s": "Bioquímica · EUA"},
  {"e": "cientistas", "t": "Perfil", "h": "Enedina Alves Marques (1913–1981)", "d": "Primeira mulher negra a se formar engenheira no Brasil, no Paraná. Atuou em obras do plano hidrelétrico do estado.", "s": "Engenharia · Brasil"},
  {"e": "cientistas", "t": "Perfil", "h": "Katemari Rosa", "d": "Pesquisadora da Universidade Federal da Bahia que estuda raça, gênero e o ensino de ciências.", "s": "Educação em Ciências · Brasil"},
  {"e": "afro", "t": "Artigo", "h": "Estética Negra: uma proposta decolonial antirracista para o ensino de Química", "a": "Brito, Lima Junior", "y": "2025", "s": "Ensino & Multidisciplinaridade, v. 10, n. 1 (UFMA)", "u": "https://periodicoseletronicos.ufma.br/index.php/ens-multidisciplinaridade/article/view/21921"},
  {"e": "afro", "t": "Artigo", "h": "A resistência das joias de crioula para um ensino de Química antirracista", "a": "Lira, Matos, Reis, Antunes", "y": "2025", "s": "SCIAS. Direitos Humanos e Educação, v. 8, n. 2", "u": "https://revista.uemg.br/sciasdireitoshumanoseducacao/article/view/9646"},
  {"e": "afro", "t": "Artigo", "h": "A química do vinho no Egito Antigo: a Lei 10.639/03 no ensino remoto", "a": "Costa, F. R.; Silva, T. A. L.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2024", "s": "Química Nova na Escola", "u": "http://qnesc.sbq.org.br/online/qnesc46_2/05-RSA-37-23.pdf"},
  {"e": "afro", "t": "Artigo", "h": "Educação Decolonial: uma proposta didática sobre estética negra no ensino de química", "a": "Lima Junior, Brito", "y": "2024", "s": "Rev. Eletrônica Multidisciplinar de Investigação Científica", "u": "https://zenodo.org/records/10641973"},
  {"e": "afro", "t": "Artigo", "h": "Afrocentricidade e o Ensino de Química: Entre Avanços e Contradições em um Quilombo Educacional", "a": "Lumumba (M. M. Lima), Camargo, Benite", "y": "2023", "s": "RBPEC, v. 23", "u": "https://periodicos.ufmg.br/index.php/rbpec/article/view/41513"},
  {"e": "afro", "t": "Artigo", "h": "Educação antirracista no ensino de química: sobre representatividade e osmose", "a": "Alvino, A. C. B.; Moreira, M. B.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2022", "s": "Revista Electrónica de Enseñanza de las Ciencias", "u": "http://reec.uvigo.es/volumenes/volumen21/REEC_21_3_9_ex1969_756.pdf"},
  {"e": "afro", "t": "Artigo", "h": "Cerveja egípcia? Educação para as relações étnico-raciais (ERER) na formação docente em química", "a": "Silva, E. L.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2022", "s": "Química Nova", "u": "https://quimicanova.sbq.org.br/pdf/ED2021-0154"},
  {"e": "afro", "t": "Artigo", "h": "Metalurgia do ferro em África: a lei 10.639/03 no ensino de química", "a": "Alvino, A. C. B.; Moreira, M. B.; Lima, G. L. M.; Silva, A. G.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2021", "s": "Química Nova na Escola", "u": "http://qnesc.sbq.org.br/online/qnesc43_4/09-EQF-64-20.pdf"},
  {"e": "afro", "t": "Artigo", "h": "A comida como prática social: sobre africanidades no ensino de química", "a": "Santos, V. L. L.; Benite, A. M. C.", "y": "2020", "s": "Química Nova na Escola", "u": "http://qnesc.sbq.org.br/online/qnesc42_3/10-AF-34-19.pdf"},
  {"e": "afro", "t": "Artigo", "h": "Química Experimental e a Lei 10.639/2003: a inserção da história e cultura africana e afro-brasileira", "a": "Alvino, A. C. B.; Moreira, M. B.; Lima, G. L. M.; Silva, A. G.; Moura, A. R.; Benite, A. M. C.", "y": "2020", "s": "Química Nova na Escola", "u": "http://qnesc.sbq.org.br/online/qnesc42_2/06-RSA-14-19.pdf"},
  {"e": "afro", "t": "Artigo", "h": "Dai-me agô (licença) para falar de saberes tradicionais de matriz africana no ensino de química", "a": "Benite, A. M. C.; Faustino, G. A. A.; Silva, J. P.; Benite, C. R. M.", "y": "2019", "s": "Química Nova", "u": "https://www.scielo.br/scielo.php?script=sci_arttext&pid=S0100-40422019004500570"},
  {"e": "afro", "t": "Artigo", "h": "Cultura africana e afro-brasileira e o ensino de química: estudos sobre desigualdade de raça e gênero", "a": "Benite, A. M. C.; Bastos, M. A.; Vargas, R. N.; Fernandes, F. S.; Faustino, G. A. A.", "y": "2018", "s": "Educação em Revista", "u": "https://www.scielo.br/j/edur/a/dqNNc8zT3dv6hx6xLBwx4Zj/?format=pdf&lang=pt"},
  {"e": "afro", "t": "Artigo", "h": "Protetores solares, pele negra e mídia em aulas de química", "a": "Vargas, R. N.; Faustino, G. A. A.; Fernandes, F. S.; Benite, A. M. C.", "y": "2018", "s": "SER Social", "u": "https://periodicos.unb.br/index.php/SER_Social/article/view/18864"},
  {"e": "afro", "t": "Artigo", "h": "Tem Dendê, Tem Axé, Tem Química: sobre história e cultura africana e afro-brasileira no ensino de química", "a": "Silva, J. P.; Alvino, A. C. B.; Santos, M. A.; Santos, V. L. L.; Benite, A. M. C.", "y": "2017", "s": "Química Nova na Escola", "u": "http://qnesc.sbq.org.br/online/qnesc39_1/05-EA-73-15.pdf"},
  {"e": "afro", "t": "Artigo", "h": "A Química do Café e a Lei 10.639/03: uma atividade prática de extração da cafeína", "a": "Bastos, M. A.; Amauro, N. Q.; Benite, A. M. C.", "y": "2017", "s": "Revista da ABPN", "u": "http://abpnrevista.org.br/revista/index.php/revistaabpn1/article/view/410"},
  {"e": "afro", "t": "Artigo", "h": "Arqueologia, Afrocentricidade e Ensino de Química", "a": "Autoria a confirmar", "s": "REDEQUIM, UFRPE", "u": "https://www.journals.ufrpe.br/index.php/REDEQUIM/article/view/4242"},
  {"e": "afro", "t": "Artigo", "h": "Química e educação em direitos humanos: questões étnico-raciais, história e cultura afro-brasileira e africana no ensino de Química", "d": "Proposta que une direitos humanos, história e cultura afro-brasileira e africana ao ensino de Química.", "s": "Revista Educação Pública, CECIERJ", "u": "https://educacaopublica.cecierj.edu.br/artigos/22/12/quimica-e-educacao-em-direitos-humanos-questoes-etnico-raciais-historia-e-cultura-afro-brasileira-e-africana-no-ensino-de-quimica"},
  {"e": "cientistas", "t": "Reportagem", "h": "8 mulheres negras cientistas brasileiras que você precisa conhecer", "d": "Perfis de cientistas brasileiras de várias áreas.", "s": "Brasil de Fato", "u": "https://www.brasildefato.com.br/2017/07/25/8-mulheres-negras-cientistas-brasileiras-que-voce-precisa-conhecer/"},
  {"e": "cientistas", "t": "Artigo", "h": "Calendário de divulgação científica com cientistas negras", "d": "Calendário da Fiocruz com cientistas negras, em PDF.", "s": "Fiocruz", "u": "https://fiocruz.br/sites/fiocruz.br/files/documentos/calendario2020_cientistasnegras.pdf"},
  {"e": "cientistas", "t": "Artigo", "h": "Cientistas Insubmissas", "d": "Página da Associação Brasileira de Pesquisadores/as Negros/as sobre cientistas negras.", "s": "ABPN", "u": "https://abpn.org.br/cientistas/"},
  {"e": "curriculo", "t": "Artigo", "h": "Educação para as Relações Étnico-Raciais na formação docente em Ciências e Química no Brasil: um panorama das produções na BDTD (2015–2024)", "a": "Pego, Felicio, Prestes", "y": "2026", "s": "Revista Vivências em Ensino de Ciências, v. 12, n. 1", "u": "https://periodicos.ufpe.br/revistas/vivencias/article/view/271345"},
  {"e": "curriculo", "t": "Artigo", "h": "Denegrindo o Ensino de Ciências/Química: um percurso para a formação docente", "a": "Camargo, M. J. R.; Faustino, G. A. A.; Benite, A. M. C.", "y": "2023", "s": "Investigações em Ensino de Ciências", "u": "https://ienci.if.ufrgs.br/index.php/ienci/article/view/2951/829"},
  {"e": "curriculo", "t": "Artigo", "h": "Educação para as relações étnico-raciais (ERER): o que nos dizem as teses de doutorado em Ciências/Química no Brasil", "a": "Faustino, G. A. A.; Silva, J. P.; Ruela, B. A.; Echeverria, A. R.; Benite, A. M. C.", "y": "2023", "s": "P@RTES", "u": "https://www.partes.com.br/2023/09/06/educacao-para-as-relacoes-etnico-raciais-erer-o-que-nos-dizem-as-teses-de-doutorado-em-ciencias-quimica-no-brasil-2/"},
  {"e": "curriculo", "t": "Artigo", "h": "Diálogos em Foco: Reconfiguração Curricular e Educação Étnico-Racial na Formação Docente em Química", "a": "Bispo, Massena (UESC)", "y": "2023", "s": "RBPEC, v. 23", "u": "https://periodicos.ufmg.br/index.php/rbpec/article/view/45859"},
  {"e": "curriculo", "t": "Trabalho em evento", "h": "Ensino de Química e perspectiva antirracista", "a": "Autoria a confirmar", "y": "2022", "s": "COPENE 2022 (ABPN)", "u": "https://www.copene2022.abpn.org.br/arquivo/downloadpublic?q=YToyOntzOjY6InBhcmFtcyI7czozNToiYToxOntzOjEwOiJJRF9BUlFVSVZPIjtzOjQ6IjU2NDAiO30iO3M6MToiaCI7czozMjoiMmIxZDFlNzg0ZDg2ZDBjZmI4MjNmNTdkNDYzMmE2NDciO30%3D"},
  {"e": "curriculo", "t": "Livro ou capítulo", "h": "Letramento racial, educação científica e o projeto Afrocientista em Goiânia", "a": "Benite, A. M. C.; Faustino, G. A. A.; Bastos, M. A.; Camargo, M. J. R.", "y": "2021", "s": "Capítulo em Atlas das periferias no Brasil (IPEA)", "u": "https://repositorio.ipea.gov.br/handle/11058/11050"},
  {"e": "curriculo", "t": "Artigo", "h": "Tessituras no Ensino de Química: interfaces para abordagem das questões étnico-raciais na sala de aula", "a": "Conceição, Gois, Lima", "y": "2020", "s": "Insignare Scientia, v. 3, n. 5", "u": "https://sumarios.org/artigo/tessituras-no-ensino-de-qu%C3%ADmica-interfaces-para-abordagem-das-quest%C3%B5es-%C3%A9tnico-raciais-na-sala"},
  {"e": "curriculo", "t": "Livro ou capítulo", "h": "Descolonização dos currículos de ciências/química: tessituras sobre a reinvenção do Poder", "a": "Benite, A. M. C.; Silva, J. P.", "y": "2018", "s": "Capítulo em Roteiros temáticos da diáspora (Editora Fi)", "u": "https://www.editorafi.org/396latitudes"},
  {"e": "curriculo", "t": "Dissertação ou tese", "h": "Estudos sobre a educação para as relações étnico-raciais e a descolonização do currículo de química", "d": "Estudo no repositório da Universidade Federal de Goiás sobre a educação para as relações étnico-raciais e o currículo de Química.", "s": "Repositório UFG", "u": "https://repositorio.bc.ufg.br/tede/items/4a2698e4-e070-44e4-b35d-6d9cc65ed560"},
  {"e": "curriculo", "t": "Dissertação ou tese", "h": "Educação para as relações étnico-raciais nos currículos de formação de professores/as de química", "d": "Análise dos cursos de licenciatura em Química da UTFPR.", "s": "Repositório UFSC", "u": "https://repositorio.ufsc.br/handle/123456789/220526"},
  {"e": "curriculo", "t": "Dissertação ou tese", "h": "“Fizeram até uma parada”: a educação das relações étnico-raciais no ensino de Química", "d": "Pesquisa sobre como as relações étnico-raciais aparecem no ensino de Química.", "s": "Repositório UFES", "u": "https://dspace4.ufes.br/items/48b84a92-f71f-4122-b2ba-3debe17bb862/full"},
  {"e": "curriculo", "t": "Artigo", "h": "A Educação das Relações Étnico-Raciais no ensino de Química", "d": "Artigo da revista Cadernos de Gênero e Diversidade, da UFBA.", "s": "Cadernos de Gênero e Diversidade", "u": "https://periodicos.ufba.br/index.php/cadgendiv/article/view/54096"},
  {"e": "curriculo", "t": "Artigo", "h": "O ensino de Ciências e as relações étnico-raciais em dissertações e teses (2009-2021): entre ausências e emergências", "d": "Mapeamento da produção acadêmica sobre o tema.", "s": "REAMEC", "u": "https://periodicoscientificos.ufmt.br/ojs/index.php/reamec/article/view/14803"},
  {"e": "curriculo", "t": "Artigo", "h": "As relações étnico-raciais no ensino de Química: possibilidades e desafios apontados pela literatura recente", "d": "Trabalho apresentado no 18º Simpósio Brasileiro de Educação Química.", "s": "18º SIMPEQUI, ABQ", "u": "https://www.abq.org.br/simpequi/2021/trabalhos/90/23932-28759.html"},
  {"e": "curriculo", "t": "Artigo", "h": "Estado da arte: relações étnico-raciais e ensino de Química na revista QNEsc", "d": "Levantamento das publicações da revista Química Nova na Escola sobre o tema.", "s": "SOL, SBC", "u": "https://sol.sbc.org.br/index.php/semiedu/article/download/20226/20054/"},
  {"e": "curriculo", "t": "Artigo", "h": "Uma sequência didática para discutir as relações étnico-raciais (Leis 10.639/03 e 11.645/08) na educação científica", "d": "Sequência didática para a educação científica, pronta para adaptar.", "s": "ResearchGate", "u": "https://www.researchgate.net/publication/329757550_Uma_sequencia_didatica_para_discutir_as_relacoes_etnico-raciais_Leis_1063903_e_1164508_na_educacao_cientifica"},
  {"e": "diaspora", "t": "Artigo", "h": "Ensino encantado de ciências: aportes decoloniais das macumbas e encruzilhadas", "a": "Rebello, T. J.; Lima, R. M.; Meirelles, R. M. S.", "y": "2024", "s": "SciELO", "u": "https://doi.org/10.1590/0102-469840516"},
  {"e": "diaspora", "t": "Artigo", "h": "Conhecimento que vale ouro: química e cultura negra para Educação Escolar Quilombola", "a": "Faiad, C. R.; Lima, G. A.; Maringolo, C. C. B.", "y": "2021", "s": "REDEQUIM, UFRPE", "u": "https://journals.ufrpe.br/index.php/REDEQUIM/article/download/4213/482484482/482500910"},
  {"e": "diaspora", "t": "Artigo", "h": "A lei 10.639/2003 e o ciclo da cana-de-açúcar: uma intervenção pedagógica no ensino de Química", "a": "Alvino, A. C. B.; Moreira, M. B.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2021", "s": "Educação Química en Punto de Vista", "u": "https://repositorio.bc.ufg.br/riserver/api/core/bitstreams/14d4fd03-b191-41f8-a918-cf7f27e56a26/content"},
  {"e": "diaspora", "t": "Artigo", "h": "Quente e frio: sobre a educação escolar quilombola e o ensino de química", "a": "Santos, M. A.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2020", "s": "Química Nova na Escola", "u": "http://qnesc.sbq.org.br/online/qnesc42_3/09-EQF-56-19.pdf"},
  {"e": "diaspora", "t": "Artigo", "h": "Vozes griôs no ensino de química: uma proposta de diálogo intercultural", "a": "Santos, M. A.; Camargo, M. J. R.; Benite, A. M. C.", "y": "2020", "s": "Rev. Bras. de Pesquisa em Educação em Ciências", "u": "https://periodicos.ufmg.br/index.php/rbpec/article/view/20306/19709"},
  {"e": "diaspora", "t": "Artigo", "h": "A diáspora africana na resistência: o Coletivo CIATA em ação no ensino de química", "a": "Camargo, M. J. R.; Benite, A. M. C.", "y": "2019", "s": "Revista del CISEN Tramas/Maepova", "u": "http://ppct.caicyt.gov.ar/index.php/cisen/article/view/13350"},
  {"e": "diaspora", "t": "Artigo", "h": "Ouro, Níquel, Congos e a Diáspora Africana em Goiás: a Lei 10.639/03 no Ensino de Química", "a": "Silva, J. P.; Benite, A. M. C.", "y": "2017", "s": "Revista da ABPN", "u": "http://abpnrevista.org.br/revista/index.php/revistaabpn1/article/view/408"},
  {"e": "indigenas", "t": "Artigo", "h": "Roteiros experimentais a partir da extração do sal do aguapé", "a": "Silva Neto et al.", "y": "2025", "s": "Research, Society and Development", "u": "https://rsdjournal.org/rsd/article/view/50382"},
  {"e": "indigenas", "t": "Artigo", "h": "Povos indígenas e o Ensino de Química: interculturalidade, intercientificidade e decolonização do saber na Amazônia", "a": "Emidio-Silva et al.", "y": "2025/2026", "s": "Cadernos de Pedagogia", "u": "https://ojs.studiespublicacoes.com.br/ojs/index.php/cadped/article/view/23002"},
  {"e": "indigenas", "t": "Dissertação ou tese", "h": "Uma sequência didática em abordagem decolonial: a farinha de mandioca, os conhecimentos indígenas e o ensino de química", "a": "Silva, P. H. D. da", "y": "2024", "s": "TCC, UFSCar Sorocaba", "u": "https://repositorio.ufscar.br/handle/20.500.14289/19366"},
  {"e": "indigenas", "t": "Artigo", "h": "Narrativas e Saberes Indígenas no Ensino de Química: Contextos para Propostas de Sequências Didáticas", "a": "Silva, Queiroz", "y": "2023", "s": "REDEQUIM, v. 9, n. 4", "u": "https://www.journals.ufrpe.br/index.php/REDEQUIM/article/view/5156"},
  {"e": "indigenas", "t": "Artigo", "h": "Licenciatura intercultural indígena e o ensino de Química", "a": "Gonzaga, K. R.; Nóbrega, L. N. N.; Camargo, M. J. R.; Benite, C. R. M.", "y": "2022", "s": "REDEQUIM, UFRPE", "u": "https://journals.ufrpe.br/index.php/REDEQUIM/article/view/4408/482484792"},
  {"e": "indigenas", "t": "Livro ou capítulo", "h": "Dialogando sobre conhecimento e ciência a partir da cultura Kaingang e da perspectiva decolonial", "a": "Hammes, E. C.", "y": "2022", "s": "Livro de acesso aberto, Editora UFFS", "u": "https://doi.org/10.7476/9786586545944"},
  {"e": "indigenas", "t": "Artigo", "h": "O uso de corantes naturais por algumas comunidades indígenas brasileiras: uma possibilidade para o ensino de química articulado com a Lei 11.645/2008", "a": "Autoria a confirmar", "y": "s.d.", "s": "REDEQUIM, UFRPE", "u": "https://www.journals.ufrpe.br/index.php/REDEQUIM/article/view/4207"},
  {"e": "indigenas", "t": "Artigo", "h": "Saberes indígenas e ensino de ciências: a Lei 11.645/08 na dinâmica das relações étnico-raciais", "d": "Relação entre a lei da temática indígena e o ensino de ciências.", "s": "Revista Pemo, UECE", "u": "https://revistas.uece.br/index.php/revpemo/article/view/16006"},
  {"e": "latam", "t": "Artigo", "h": "Colonialidade e Decolonialidade na Pesquisa em Educação em Ciências e em Educação Ambiental", "a": "Santos, Rezende, Ostermann", "y": "2025", "s": "Investigações em Ensino de Ciências, v. 30, n. 3", "u": "https://ienci.if.ufrgs.br/index.php/ienci/article/view/3842"},
  {"e": "latam", "t": "Artigo", "h": "Integração Decolonial no Ensino de Química", "a": "Pinheiro, Souza", "y": "2024", "s": "Revista RIEC", "u": "https://riec.univs.edu.br/index.php/riec/article/view/416"},
  {"e": "latam", "t": "Artigo", "h": "Fundamentos Anticoloniais da Didática Histórico-Crítica Para o Ensino de História e Cultura Afro-Brasileira nas Aulas de Química: Abrindo Caminhos", "a": "Magalhães, Messeder Neto", "y": "2024", "s": "RBPEC, v. 24", "u": "https://periodicos.ufmg.br/index.php/rbpec/article/view/51504"},
  {"e": "latam", "t": "Artigo", "h": "Tejiendo una memoria histórica sobre bebidas alcohólicas: la clase de química desde la educación popular", "a": "Gómez-Fierro et al.", "y": "2022", "s": "Revista LadECiN (Universidad Surcolombiana)", "u": "https://journalusco.edu.co/index.php/LadECiN/article/view/4285/5023"},
  {"e": "latam", "t": "Artigo", "h": "Ensino de fermentação alcoólica: contribuições da etnociência e do enfoque Ciência, Tecnologia e Sociedade (CTS)", "a": "Autoria a confirmar", "y": "s.d.", "s": "Rencima", "u": "https://revistapos.cruzeirodosul.edu.br/rencima/article/view/4348"},
  {"e": "latam", "t": "Livro ou capítulo", "h": "Decolonialidades na educação em Ciências", "a": "Velásquez et al.", "y": "s.d.", "s": "Coletânea, UFSC (REPI)", "u": "https://repi.ufsc.br/sites/default/files/DECOLONIALIDADESNAEDUCACAOEMCIENCIAS.pdf"},
  {"e": "latam", "t": "Reportagem", "h": "Química decolonial: professores destacam saberes africanos e indígenas", "d": "Reportagem sobre professores que relacionam o currículo de Química com saberes africanos e indígenas.", "s": "Instituto Claro", "u": "https://www.institutoclaro.org.br/educacao/nossas-novidades/reportagens/quimica-decolonial-professores-relacionam-curriculo-com-saberes-africanos-e-indigenas/"},
  {"e": "midia", "t": "Podcast", "h": "Pelo direito de ser xereta", "d": "Curiosidade e ciência, com Enedina Alves Marques e Sonia Guimarães.", "s": "Vidas Negras, 1ª temporada, ep. 3", "u": "https://tiagorogero.com/vn-1a-temporada/", "n": "03", "img": "image/capa-vidasNegras.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Terra de Cientistas", "s": "Vidas Negras, 2ª temporada, ep. 20", "u": "https://tiagorogero.com/vn-2a-temporada/", "n": "20", "img": "image/capa-vidasNegras.jpg"},
  {"e": "midia", "t": "Podcast", "h": "A educação liberta", "s": "Vidas Negras, 2ª temporada, ep. 21", "u": "https://tiagorogero.com/vn-2a-temporada/", "n": "21", "img": "image/capa-vidasNegras.jpg"},
  {"e": "midia", "t": "Podcast", "h": "A grande aposta", "d": "A história como chave para compreender o Brasil de hoje.", "s": "Projeto Querino, temporada 1, ep. 1 (Rádio Novelo)", "u": "https://projetoquerino.com.br/podcast-item/a-grade-aposta/", "n": "01", "img": "image/capa-projetoQuerino.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Ética: só para brancos", "d": "Células usadas em pesquisas foram obtidas sem autorização de uma mulher negra com câncer. Amostras de sangue de indígenas foram vendidas sem consentimento.", "s": "Ciência Suja, temporada 4, ep. 1", "u": "https://www.cienciasuja.com.br/temporada-4/%C3%A9tica%3A-s%C3%B3-para-brancos", "n": "01", "img": "image/capa-cienciaSuja.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Portas fechadas", "d": "Só 7,4% dos docentes de pós-graduação em ciências biológicas, exatas e da terra são pretos, pardos ou indígenas. O episódio discute o efeito disso na produção científica.", "s": "Ciência Suja, temporada 4, ep. 2", "u": "https://www.cienciasuja.com.br/temporada-4/portas-fechadas", "n": "02", "img": "image/capa-cienciaSuja.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Peles negras, máquinas brancas", "d": "A inteligência artificial reproduz vieses discriminatórios, o chamado racismo algorítmico, apesar da aparência de neutralidade.", "s": "Ciência Suja, temporada 4, ep. 3", "u": "https://www.cienciasuja.com.br/temporada-4/pele-negra%2C-m%C3%A1quinas-brancas", "n": "03", "img": "image/capa-cienciaSuja.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Achados, roubados e apagados", "d": "Crítica ao modelo de escavações lideradas por pesquisadores brancos, com populações locais como guias e o conhecimento delas apagado.", "s": "Ciência Suja, temporada 4, ep. 4", "u": "https://www.cienciasuja.com.br/temporada-4/achados%2C-roubados-e-apagados", "n": "04", "img": "image/capa-cienciaSuja.jpg"},
  {"e": "midia", "t": "Podcast", "h": "A ciência é para todos", "d": "Como o conhecimento científico e os saberes tradicionais podem se aliar na agricultura e na farmacologia, sem abrir espaço para a pseudociência.", "s": "Ciência Suja, temporada 4, ep. 5", "u": "https://www.cienciasuja.com.br/temporada-4/a-ci%C3%AAncia-%C3%A9-para-todos", "n": "05", "img": "image/capa-cienciaSuja.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Série Eugenia e Ressurgência", "d": "Podcast sobre fatos históricos que moldaram o país, em contraponto à narrativa oficial. A primeira temporada trata da história da eugenia no Brasil.", "s": "Pelo Avesso", "u": "https://pod.link/PeloAvesso/episode/ZDkwMjdkZTgtY2ZkNC00ZTJlLWE0YjAtNzkxMTZmYmQ4MTI1", "img": "image/capa-peloAvesso.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Ressurgência: as faces de Luzia", "d": "Segunda temporada: o Brasil pré-colonial, com ciências naturais, arqueologia, antropologia, linguística e tradições orais indígenas.", "s": "Pelo Avesso, ep. 10", "u": "https://pod.link/PeloAvesso/episode/OTFlMjEzN2ItNjkxOS00Nzc0LWE0YTEtYWVmNTliOTM5NDg2", "n": "10", "img": "image/capa-peloAvesso.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Braulina, mulheres indígenas na ciência", "d": "Podcast com cientistas negras e indígenas da América Latina, apresentado por Kananda Eller.", "s": "Deusa Cientista, ep. 5", "u": "https://www.youtube.com/watch?v=yUebSq5vnkQ", "n": "05", "l1": "YouTube", "u2": "https://open.spotify.com/episode/4UZw0uHlweEqRaODA6Y4IF", "l2": "Spotify", "img": "image/capa-deusasCientistas.jpg", "img": "image/capa-deusasCientistas.jpg"},
  {"e": "midia", "t": "Podcast", "h": "Cosmologias", "d": "Cosmologia bakongo da criação do universo comparada ao Big Bang, com Alan Alves Brito, Gabriel Pereira e Tiganá Santana.", "s": "Entre Deuses e Astronautas, ep. 1 (Alma Preta)", "u": "https://almapreta.com.br/entre-deuses-e-astronautas/", "n": "01", "img": "image/capa-cosmologia.jpg"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "A Lei nº 10.639/2003 e a Educação em Direitos Humanos: uma proposta sob a temática drogas…", "a": "Marcos Vinícios dos Reis", "y": "2024", "s": "PROFQUI, UFF", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2025/02/T2022-Marcos-Vinicios-dos-Reis-Dissertação_UFF.pdf", "ad": "Alta"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Resgate da cultura quilombola sobre plantas medicinais do Cerrado no ensino de química orgânica e em uma feira de ciências", "a": "Niltônio Carrijo Flores", "y": "2022", "s": "PROFQUI, USP", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2023/02/USP_Niltonio-Carrijo-Flores-Dissertacao_2018.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2023/02/USP_Niltonio-Carrijo-Flores-Produto_2018_compressed.pdf", "ad": "Alta"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "O ensino de química pautado nas relações étnico-raciais: uma pesquisa desenvolvida com estudantes da terceira série…", "a": "Gisele Pereira Vieira de Souza", "y": "2020", "s": "PROFQUI, UFRJ", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2020/10/UFRJ_Dissertacao_Gisele-Pereira-Vieira-de-Souza_2017.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2020/10/UFRJ_Produto_Gisele-Pereira-Vieira-de-Souza_2017.pdf", "ad": "Alta"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Espelhos: 'Por que não somos cientistas?' a utilização da pesquisa da professora Joana D'Arc Félix como ferramenta…", "a": "Eliane Seixas Nascimento Guimarães", "y": "2019", "s": "PROFQUI, UFRJ", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2020/10/UFRJ_Dissertacao_Eliane-Seixas-do-Nascimento_2017.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2020/10/UFRJ_Produto_Eliane-Seixas-do-Nascimento_2017.pdf", "ad": "Alta"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Contribuições femininas para a descoberta de elementos químicos e suas implicações para o desenvolvimento da tabela periódica", "a": "Juliana Magalhães Charamba de Souza", "y": "2024", "s": "PROFQUI, UFRPE", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2025/03/UFRPE_Juliana-Magalhaes-Charamba_DISSERTACAO_2022.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2025/03/UFRPE_Juliana-Magalhaes-Charamba_PRODUTO-EDUCACIONAL_2022.pdf", "ad": "Média"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Educação em Direitos Humanos em livros didáticos de Química: elaboração e percepções de um material […]", "a": "Claudenize Pontes da Silva Leal", "y": "2022", "s": "PROFQUI, UFPR", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2023/09/UFPR_Dissertacao_CLAUDENIZE-PONTES-DA-SILVA-LEAL_2020.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2023/09/UFPR_Produto_Claudenize.pdf", "ad": "Média"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Icônicas: mulheres cientistas nas séries da Netflix, uma análise semiótica a partir da arte.", "a": "Wallace Costa de Souza", "y": "2021", "s": "PROFQUI, UFRJ", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/09/UFRJ_Dissertação_Wallace-Costa-de-Souza_2018.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/09/UFRJ_Produto_Wallace-Costa-de-Souza_2018-compactado.pdf", "ad": "Média"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "A alfabetização científica a partir dos saberes populares: uma proposta para o ensino de química", "a": "Juliana Arruda Martins", "y": "2020", "s": "PROFQUI, UFV", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/03/UFV_DISSERTACAO_JULIANA-ARRUDA-MARTINS_2017.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/03/UFV_PRODUTO-EDUCACIONAL_JULIANA-ARRUDA-MARTINS_2017.pdf", "ad": "Média"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Mulheres da tabela periódica: jogos didáticos para o engajamento de estudantes do ensino médio", "a": "Heidi Mara dos Santos", "y": "2020", "s": "PROFQUI, UFPR", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2022/03/UFPR_Dissertacao_Heide-Santos_2018-1.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2022/03/UFPR_PRODUTO-EDUCACIONAL_HEIDI_MARA_DOS_SANTOS_EIGLMEIER_2018-compactado.pdf", "ad": "Média"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Bolhas e Redes: OS TENSOATIVOS COMO TEMA ARTICULADOR DE UMA REDE NÃO MODERNA – famílias do campo, alunos e laboratórios", "a": "Nilson de Souza", "y": "2021", "s": "PROFQUI, UEL", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2022/09/Dissertacao_NILSON-DE-SOUZA-versao-final.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2022/09/Produto-Educacional_-NILSON-DE-SOUZA.pdf", "ad": "Baixa"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "A pedagogia de projetos na escola do campo: a temática da mandioca para o ensino de química", "a": "Valdemir Gomes Cortez Junior", "y": "2020", "s": "PROFQUI, UFRN", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/02/UFRN_Dissertacao_Valdemir-Cortez-Junior_2018-1.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/02/UFRN_Produto_VALDEMIR-GOMES-CORTEZ-JUNIOR.pdf", "ad": "Baixa"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "Sequência didática do estudo de misturas para jovens e adultos na perspectiva da educação profissional em agroecologia", "a": "Thiago Aguiar Portela (UFPR)", "y": "2020", "s": "PROFQUI, UFMS/UFPR", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2021/04/UFPR_Dissertacao_Thiago-Portela_2018.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2022/03/UFPR_Produto-Educacional-Thiago-Portela_2018-compactado.pdf", "ad": "Baixa"},
  {"e": "profqui", "t": "Dissertação ou tese", "h": "A produção da cola no espaço prisional: como são construídos saberes químicos dentro dos cubículos", "a": "Everton José Galbetti", "y": "2019", "s": "PROFQUI, UEL", "u": "https://profqui.iq.ufrj.br/wp-content/uploads/2020/08/UEL_Everton-José-Galbetti_2019.pdf", "u2": "https://profqui.iq.ufrj.br/wp-content/uploads/2020/08/2019-Produto-Educacional-Everton-Jose-Galbetti_UEL.pdf", "ad": "Baixa"}
];

const T = [
  {"k": "curriculo", "n": "Currículo e formação docente", "sh": "Currículo", "sym": "losango", "c": "#7A4420", "d": "Pesquisas que perguntam quem aparece no currículo de Química, quais saberes ficam de fora e como a Educação das Relações Étnico-Raciais entra na formação inicial e continuada de professoras e professores."},
  {"k": "afro", "n": "Saberes afrocentrados", "sh": "Afrocentrados", "sym": "sankofa", "c": "#E07A1F", "d": "Práticas e conteúdos de Química que partem da história e da cultura africana e afro-brasileira, em diálogo com a Lei 10.639/03."},
  {"k": "indigenas", "n": "Saberes indígenas", "sh": "Indígenas", "sym": "folha", "c": "#5C6B3A", "d": "Propostas que aproximam conhecimentos de povos indígenas dos conteúdos de Química, com atenção à Lei 11.645/08, à interculturalidade e à intercientificidade."},
  {"k": "diaspora", "n": "Diáspora e educação quilombola", "sh": "Diáspora", "sym": "encruzilhada", "c": "#A3301C", "d": "Química e cultura negra na educação escolar quilombola, nos saberes da diáspora africana e nas encruzilhadas entre ciência e ancestralidade."},
  {"k": "latam", "n": "Perspectivas decoloniais", "sh": "Decoloniais", "sym": "arco", "c": "#B8860B", "d": "Referenciais teóricos e experiências latino-americanas de educação em Ciências e Química a partir da decolonialidade, da etnociência e da educação popular."},
  {"k": "cientistas", "n": "Cientistas para se conhecer", "sh": "Cientistas", "sym": "adinkrahene", "c": "#7A2140", "d": "Estas trajetórias podem entrar em aulas de Química, de Ciências da Natureza e de projetos interdisciplinares."},
  {"k": "profqui", "n": "Rede PROFQUI", "sh": "PROFQUI", "sym": "trama", "c": "#4F7466", "d": "O Mestrado Profissional em Química em Rede Nacional forma professoras e professores da Educação Básica e exige um produto educacional de cada dissertação."},
  {"k": "midia", "n": "Vídeos e podcasts", "sh": "Podcasts", "sym": "nkyinkyim", "c": "#A67C52", "d": "Episódios e programas para abrir conversas em sala, em grupos de estudo e em formações."}
];

const IMG_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-9 9"/></svg>';

const TS = { "Podcast":"s-nkyinkyim", "Artigo":"s-losango", "Dissertação ou tese":"s-folha", "Reportagem":"s-sankofa", "Livro ou capítulo":"s-trama", "Trabalho em evento":"s-arco", "Perfil":"s-adinkrahene" };
const MAPCOL = {"curriculo": "#E0805F", "afro": "#E3B873", "indigenas": "#A5B877", "diaspora": "#D98E4A", "latam": "#8DB0A0", "cientistas": "#D99C91", "profqui": "#C99C80", "midia": "#E39A55"};
const TMAP = {}; T.forEach((t,i)=>{ t.i=i; t.m=MAPCOL[t.k]; TMAP[t.k]=t; });
/* ordena os materiais pela ordem das temáticas (mantém a ordem original dentro de cada uma) */
R.forEach((r,i)=>{ r._o=i; });
R.sort((a,b)=> (TMAP[a.e].i-TMAP[b.e].i) || (a._o-b._o));
R.forEach((r,i)=>{ r.id=i; });
T.forEach(t=>{ t.total = R.filter(r=>r.e===t.k).length; });

const NODE_ICON_PATHS = {
  /* fogueira: lenha cruzada + chama */
  center: '<path class="flame" d="M12 3c.5 2.6 3.6 4.4 3.6 8a3.6 3.6 0 0 1-7.2 0c0-1.6.8-2.6 1.6-3.6.3 1.2.9 1.8 1.5 1.9C11.2 7.4 11.3 5 12 3Z" stroke-linejoin="round"/><path d="M5 20l14-4.5M19 20L5 15.5" stroke-linecap="round"/>'
};

function esc(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

/* ---------- Sobre mim (popup — edite os dados abaixo) ---------- */
const SOBRE_MIM = {
  nome:"Marcela Sette da Silva",
  papel:"Mestranda PROFQUI · USP Ribeirão Preto",
  bio:"Autora do produto educacional «Repositório de práticas decoloniais no ensino de Química», desenvolvido na dissertação de mestrado profissional sobre a descolonização curricular a partir do Currículo Paulista e dos materiais do Centro de Mídias de São Paulo. Orientação: Profª. Drª. Daniela Gonçalves de Abreu Favacho.",
  contato:"[email@exemplo.com]",
  linkLattes:"https://SUBSTITUA-LINK-LATTES-OU-PORTFOLIO"
};

function openAbout(){
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="modal-close" id="closeModal" aria-label="Fechar">&times;</button>
    <span class="trilha-tag" style="color:var(--terracota)">Sobre mim</span>
    <h2>${SOBRE_MIM.nome}</h2>
    <div class="modal-meta">
      <span class="meta-pill">${SOBRE_MIM.papel}</span>
    </div>
    <div class="modal-section">
      <h4>Apresentação</h4>
      <p>${SOBRE_MIM.bio}</p>
    </div>
    <div class="modal-section">
      <h4>Contato</h4>
      <p>${SOBRE_MIM.contato}</p>
    </div>
    <div class="modal-section">
      <a class="drive-link" href="${SOBRE_MIM.linkLattes}" target="_blank" rel="noopener">Currículo / portfólio ↗</a>
    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('closeModal').addEventListener('click', closeModal);
}



/* ---------- Mapa circular (só as bolinhas) ----------
   Hub com fogueira, um símbolo grande por temática e um símbolo pequeno por
   material em dois anéis; borda externa de pontos. Clique num símbolo pequeno
   abre o pop-up do material; clique num símbolo grande filtra a temática. */
let currentTrilha = 'todas';
let currentSearch = '';
let currentType = 'todos';
let hubText = null;
const IDLE_CAP = 'Toque em um símbolo para explorar';
/* Significado de cada símbolo (textos da seção "Sobre os grafismos").
   Adinkra: sentidos reais, de origem akan. Os demais são composições geométricas
   originais da página e não carregam significado atribuído a nenhum povo. */
const SYMINFO = {
  'curriculo':   { nome:'Losango escalonado', texto:'Grafismo geométrico original desta página: camadas dentro de camadas, como o currículo que se revê por dentro.' },
  'afro':        { nome:'Sankofa', texto:'Símbolo Adinkra, de origem akan (Gana e Costa do Marfim): voltar e buscar o que ficou para trás. Muito presente na cultura visual afro-brasileira.' },
  'indigenas':   { nome:'Folha / espiga', texto:'Composição geométrica original desta página, inspirada no que brota da terra. Não reproduz o grafismo de nenhum povo em particular.' },
  'diaspora':    { nome:'Encruzilhada', texto:'Composição original: o cruzamento de caminhos entre ciência e ancestralidade, entre as margens do Atlântico.' },
  'latam':       { nome:'Arcos', texto:'Composição original: uma ponte entre margens, entre saberes do Sul e a sala de aula.' },
  'cientistas':  { nome:'Adinkrahene', texto:'Símbolo Adinkra de origem akan: liderança e grandeza, aqui para homenagear trajetórias de cientistas negras e negros.' },
  'profqui':     { nome:'Trama', texto:'Composição original, inspirada na cestaria: fios que se cruzam para formar uma rede, como a rede nacional do PROFQUI.' },
  'midia':       { nome:'Nkyinkyim', texto:'Símbolo Adinkra de origem akan: iniciativa e versatilidade, a torção do caminho que muda de direção.' }
};
function showInfo(t){
  const box = document.getElementById('mapInfo');
  if(!box) return;
  if(!t){
    box.innerHTML = `<p class="mi-idle">${IDLE_CAP}. Cada símbolo reúne uma temática e carrega uma ideia da cultura que o inspirou.</p>`;
    return;
  }
  const sy = SYMINFO[t.k];
  box.innerHTML = `
    <div class="mi-head"><svg aria-hidden="true" style="color:${t.m}"><use href="#s-${t.sym}"/></svg>
      <div><span class="mi-tag" style="color:${t.m}">Temática · ${t.total} itens</span><strong>${esc(t.n)}</strong></div></div>
    <p>${esc(t.d)}</p>
    <p class="mi-sym"><b>${esc(sy.nome)}.</b> ${esc(sy.texto)}</p>
    <a class="btn solid" href="#acervo">Ver os materiais ↓</a>`;
}

function buildTrailMap(){
  const svg = document.getElementById('trailMapSvg');
  const NS = 'http://www.w3.org/2000/svg';
  svg.innerHTML = '';
  svg.setAttribute('viewBox','-440 -440 880 880');

  function mk(tag, attrs, parent){
    const el = document.createElementNS(NS, tag);
    for(const k in attrs) el.setAttribute(k, attrs[k]);
    if(parent) parent.appendChild(el);
    return el;
  }
  function pol(r, deg){ const a = deg*Math.PI/180; return [r*Math.cos(a), r*Math.sin(a)]; }
  function useSym(parent, id, size, color){
    const u = mk('use', { href:'#'+id, x:-size/2, y:-size/2, width:size, height:size }, parent);
    u.style.color = color; return u;
  }
  function setHub(s){
    hubText.textContent = s || '';
    hubIconG.style.transform = s ? 'translateY(-24px)' : 'translateY(0)';
  }

  const R1 = 168, R2 = 292, R3 = 348, RD = 418;
  mk('circle', { r:R1, class:'ring' }, svg);
  mk('circle', { r:R2-24, class:'ring' }, svg);
  mk('circle', { r:RD-14, class:'ring dashed' }, svg);
  /* borda externa de bolinhas */
  for(let i=0;i<96;i++){
    const q = pol(RD, i*3.75), big = i%6===0;
    mk('circle', { cx:q[0], cy:q[1], r: big?4.5:2.2, class: big?'edge-big':'edge-small' }, svg);
  }
  const gSpokes = mk('g', {}, svg), gNodes = mk('g', {}, svg), hub = mk('g', { class:'hub' }, svg);

  /* hub: fogueira */
  mk('circle', { r:88, class:'hub-bg' }, hub);
  const hubIconG = mk('g', { class:'hub-icon-g' }, hub);
  const hi = mk('svg', { x:-48, y:-48, width:96, height:96, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.6', class:'hub-icon' }, hubIconG);
  hi.innerHTML = NODE_ICON_PATHS.center;
  hubText = mk('text', { class:'hubt', y:58 }, hub);
  setHub('');
  hub.addEventListener('click', ()=> setTrilha('todas'));

  const step = 360/T.length;
  T.forEach((t, ti)=>{
    const ang = -90 + ti*step, p = pol(R1, ang);
    mk('line', { x1:0, y1:0, x2:p[0], y2:p[1], class:'spoke-main' }, gSpokes);
    const grp = mk('g', { class:'sec-g', 'data-k':t.k }, gNodes);
    const tg = mk('g', { class:'node theme', tabindex:'0', role:'button', 'data-trilha':t.k, 'aria-label':t.n,
                         transform:`translate(${p[0]} ${p[1]})` }, grp);
    mk('circle', { r:34, stroke:t.m }, tg);
    useSym(tg, 's-'+t.sym, 38, t.m);
    tg.addEventListener('click', ()=> setTrilha(currentTrilha===t.k ? 'todas' : t.k));
    tg.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); setTrilha(currentTrilha===t.k ? 'todas' : t.k); } });
    tg.addEventListener('mouseenter', ()=>{ setHub(t.sh.toUpperCase()); });
    tg.addEventListener('mouseleave', ()=>{ syncHub(); });
  });
  function syncHub(){
    const t = TMAP[currentTrilha];
    setHub(t ? t.sh.toUpperCase() : '');
    showInfo(t);
  }
  window.syncHub = syncHub;
}

/* ---------- Estado & renderização ---------- */
function setTrilha(t){
  currentTrilha = t;
  document.querySelectorAll('.tab').forEach(c=> c.classList.toggle('active', c.dataset.trilha === t));
  const svg = document.getElementById('trailMapSvg');
  if(svg){
    svg.querySelectorAll('.node.theme').forEach(n=> n.classList.toggle('is-active', n.dataset.trilha === t));
    svg.querySelectorAll('.sec-g').forEach(g=> g.classList.toggle('dim', t !== 'todas' && g.dataset.k !== t));
  }
  if(window.syncHub) window.syncHub();
  render();
}

function matches(r){
  const trilhaOk = currentTrilha === 'todas' || r.e === currentTrilha;
  const typeOk = currentType === 'todos' || r.t === currentType;
  const q = currentSearch.trim().toLowerCase();
  const searchOk = !q || [r.h, r.d, r.s, r.t, r.a, r.y].join(' ').toLowerCase().includes(q);
  return trilhaOk && typeOk && searchOk;
}

function adLabel(ad){
  return ad === 'Baixa' ? 'Aproximação indireta' : 'Aderência ' + ad.toLowerCase();
}

function render(){
  const grid = document.getElementById('cardGrid');
  const list = R.filter(matches);
  document.getElementById('resultCount').textContent = `${list.length} ${list.length===1?'material encontrado':'materiais encontrados'}`;

  if(list.length === 0){
    grid.innerHTML = `<div class="empty"><strong>Nada por aqui ainda</strong>Tente outra temática ou limpe a busca.</div>`;
    return;
  }

  /* Só os cards de podcast têm bloco .card-thumb (placeholder de imagem). Para usar uma
     imagem real, troque o innerHTML do .card-thumb por um <img> com
     style="width:100%;height:100%;object-fit:cover". */
  grid.innerHTML = list.map((r,i)=>{
    const t = TMAP[r.e];
    const delay = Math.min(i,10) * 0.05;
    const tag = r.t + (r.y && r.y !== 's.d.' ? ' · ' + r.y : '');
    return `<div class="card" style="--accent:${t.m}; animation-delay:${delay}s" data-id="${r.id}" tabindex="0" role="button">
      ${r.t === 'Podcast' ? (r.img ? `<div class="card-thumb"><img src="${esc(r.img)}" alt="${esc(r.h)}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit"></div>` : `<div class="card-thumb img-placeholder">${IMG_ICON}</div>`) : ''}
      <div class="card-top">
        <span class="trilha-tag">${esc(t.n)}</span>
        <span class="habilidade-tag">${esc(tag)}</span>
      </div>
      <h3>${esc(r.h)}</h3>
      ${r.a ? `<p class="by">${esc(r.a)}</p>` : ''}
      ${r.d ? `<p>${esc(r.d)}</p>` : ''}
      <div class="card-foot">
        <span>${esc(r.s)}</span>
        ${r.ad ? `<span class="ad ${r.ad==='Alta'?'alta':r.ad==='Média'?'media':'baixa'}">${adLabel(r.ad)}</span>` : ''}
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.card').forEach(card=>{
    const open = ()=> openModal(parseInt(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
  });
}

function openModal(id){
  const r = R.find(x=>x.id===id);
  const t = TMAP[r.e];
  const modal = document.getElementById('modalContent');
  const l1 = r.l1 || (r.ad ? 'Dissertação' : 'Abrir material');
  const l2 = r.l2 || (r.ad ? 'Produto educacional' : 'Abrir');
  const pills = [r.t, (r.y && r.y !== 's.d.') ? r.y : '', r.s].filter(Boolean).map(x=>`<span class="meta-pill">${esc(x)}</span>`).join('');
  const links = r.u ? `
    <div class="modal-section">
      <a class="drive-link" href="${esc(r.u)}" target="_blank" rel="noopener">${esc(l1)} ↗</a>
      ${r.u2 ? `<a class="drive-link alt" href="${esc(r.u2)}" target="_blank" rel="noopener">${esc(l2)} ↗</a>` : ''}
      <p class="drive-note">O link abre a página da fonte original, em outra aba. Títulos e descrições seguem o que cada fonte publica.</p>
    </div>` : '';
  modal.innerHTML = `
    <button class="modal-close" id="closeModal" aria-label="Fechar">&times;</button>
    <span class="trilha-tag" style="color:${t.m}">${esc(t.n)}</span>
    <h2>${esc(r.h)}</h2>
    <div class="modal-meta">${pills}</div>
    ${r.d ? `<div class="modal-section"><h4>Resumo</h4><p>${esc(r.d)}</p></div>` : ''}
    ${r.a ? `<div class="modal-section"><h4>Autoria</h4><p>${esc(r.a)}</p></div>` : ''}
    ${r.ad ? `<div class="modal-section"><h4>Aderência ao tema</h4><p><span class="ad ${r.ad==='Alta'?'alta':r.ad==='Média'?'media':'baixa'}">${adLabel(r.ad)}</span><br><span class="drive-note" style="display:block;margin-top:8px">Estimada pelo título e pela página do programa PROFQUI.</span></p></div>` : ''}
    <div class="modal-section"><h4>Fonte</h4><p class="ref-line">${esc(r.s)}</p></div>
    ${links}
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('closeModal').addEventListener('click', closeModal);
}

function closeModal(){ document.getElementById('overlay').classList.remove('open'); }
document.getElementById('overlay').addEventListener('click', (e)=>{
  if(e.target.id === 'overlay') closeModal();
});
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

/* ---------- Abas de filtro, tipos & busca ---------- */
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=> setTrilha(tab.dataset.trilha));
});
document.getElementById('typeSelect').addEventListener('change', (e)=>{
  currentType = e.target.value;
  render();
});
document.getElementById('searchInput').addEventListener('input', (e)=>{
  currentSearch = e.target.value;
  render();
});
document.getElementById('aboutBtn').addEventListener('click', openAbout);

/* estatísticas */
(function(){
  const nDiss = R.filter(r=>r.e==='profqui').length;
  const nPod = R.filter(r=>r.t==='Podcast').length;
  document.getElementById('stats').innerHTML =
    `<span><strong>${R.length}</strong> materiais</span><span><strong>${T.length}</strong> temáticas</span><span><strong>${nDiss}</strong> dissertações do PROFQUI</span><span><strong>${nPod}</strong> episódios de podcast</span>`;
})();

buildTrailMap();
render();
showInfo(null);