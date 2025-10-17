// EndoVAC Medical Application JavaScript
// Professional medical web application with interactive features

class EndoVACApp {
    constructor() {
        this.data = {
            "dispositivos": [
                {
                    "nombre": "GORE® VIABAHN® Endoprosthesis",
                    "tipo": "Stent-graft cubierto ePTFE/Nitinol",
                    "diametros": "5-13 mm",
                    "longitudes": "25-250 mm",
                    "introductor": "6-10 Fr",
                    "costo_usd": "3500-5500",
                    "link": "https://www.goremedical.com/en-emea/products/viabahn",
                    "caracteristicas": "CBAS Heparin Surface, excelente flexibilidad y conformabilidad",
                    "indicaciones": "Primera elección para carótidas, resistente a angulaciones",
                    "french_compatibility": "6-7 Fr (5-8mm), 8-10 Fr (9-13mm)"
                },
                {
                    "nombre": "BD Fluency® Plus Endovascular Stent Graft",
                    "tipo": "Stent-graft cubierto ePTFE/Nitinol",
                    "diametros": "6-13.5 mm",
                    "longitudes": "40-120 mm",
                    "introductor": "8-10 Fr",
                    "costo_usd": "3000-4800",
                    "link": "https://www.bd.com/en-us/products-and-solutions/products/product-families/fluency-plus-endovascular-stent-graft",
                    "caracteristicas": "Carbon impregnation, dual layer ePTFE encapsulation",
                    "indicaciones": "Vasos tortuosos, acceso difícil, restenosis venosa",
                    "french_compatibility": "8 Fr (6-7mm), 9 Fr (8-10mm), 10 Fr (12-13.5mm)"
                },
                {
                    "nombre": "Getinge Advanta V12® (iCast®) Covered Stent",
                    "tipo": "Stent balón expandible cubierto ePTFE",
                    "diametros": "5-10 mm",
                    "longitudes": "16-59 mm",
                    "introductor": "6-7 Fr",
                    "costo_usd": "2800-4200",
                    "link": "https://www.getinge.com/int/products/advanta-v12-balloon-expandable-covered-stent/",
                    "caracteristicas": "316L stainless steel, fully encapsulated, customizable post-dilation",
                    "indicaciones": "Vasos de calibre intermedio, anatomía estándar, precisión de colocación",
                    "french_compatibility": "6 Fr (5-7mm), 7 Fr (8-10mm)"
                },
                {
                    "nombre": "Bentley BeGraft® Peripheral Stent Graft",
                    "tipo": "Stent-graft balón expandible CoCr",
                    "diametros": "5-10 mm",
                    "longitudes": "18-58 mm",
                    "introductor": "6 Fr",
                    "costo_usd": "2500-3800",
                    "link": "https://www.bentley.global",
                    "caracteristicas": "Cobalt-Chromium platform, micro-porous ePTFE, lowest crossing profile",
                    "indicaciones": "Anatomía compleja, posicionamiento crítico, lesiones calcificadas",
                    "french_compatibility": "6 Fr compatible hasta 8x57mm"
                },
                {
                    "nombre": "Gore VIABAHN® VBX Balloon Expandable",
                    "tipo": "Stent-graft balón expandible cubierto",
                    "diametros": "5-13 mm",
                    "longitudes": "15-79 mm",
                    "introductor": "6-8 Fr",
                    "costo_usd": "3200-4600",
                    "link": "https://www.goremedical.com/en-emea/products/vbx",
                    "caracteristicas": "Stainless steel rings, semi-compliant covered balloon, CBAS Heparin Surface",
                    "indicaciones": "Áreas de stress mecánico elevado, bifurcación aórtica, kissing stents",
                    "french_compatibility": "6 Fr (5-8mm), 7-8 Fr (9-13mm)"
                }
            ],
            "procedimiento_pasos": [
                {
                    "fase": "Preparación Preoperatoria",
                    "pasos": [
                        "Angio-TC con reconstrucción 3D para planificación morfométrica exacta",
                        "Evaluación de circulación colateral cerebral (Doppler transcraneal bilateral)",
                        "Optimización médica completa: HbA1c <7%, ClCr >30ml/min, albúmina >3g/dL",
                        "Consentimiento informado exhaustivo incluyendo riesgos neurológicos específicos",
                        "Preparación de sala híbrida con angiografía digital de alta resolución",
                        "Disponibilidad de neuroprotección cerebral (shunt temporal si necesario)"
                    ]
                },
                {
                    "fase": "PASO 1: Relining Endovascular (Técnica Precisa)",
                    "pasos": [
                        "Anestesia general con monitorización neurológica multimodal (EEG, NIRS)",
                        "Acceso femoral común derecho con técnica Seldinger modificada (ecografía)",
                        "Inserción de introductor según tabla: 6-7Fr (5-8mm), 8-10Fr (>8mm)",
                        "Cateterización selectiva carotídea con microcatéter hidrofílico 5Fr (Bernstein/Sidewinder)",
                        "Angiografía diagnóstica multiproyeccional (AP, lateral, oblicuas 45°)",
                        "Mediciones precisas: diámetro luminal, longitud lesión, angulaciones",
                        "Selección stent-graft: sobredimensionamiento 15-25%, cobertura ±20mm lesión",
                        "Intercambio por sistema 0.035'' x 300cm (Amplatz Super Stiff para soporte)",
                        "Avance y posicionamiento bajo roadmap con marcadores radiopacos",
                        "Despliegue controlado con verificación anatómica (apófisis transversas C2-C6)",
                        "Angiografía de control: exclusión completa, ausencia endoleaks, flujo cerebral",
                        "Embolización selectiva arteria carótida externa si endoleak tipo II persistente"
                    ]
                },
                {
                    "fase": "PASO 2: Revisión Quirúrgica Limitada (Sin Clampaje)",
                    "pasos": [
                        "Posicionamiento supino con extensión cervical moderada (rollo interescapular)",
                        "Incisión cervical anterior siguiendo borde anterior esternocleidomastoideo (5-7cm)",
                        "Disección anatómica por planos: piel→tejido subcutáneo→platisma→fascia cervical",
                        "Retracción lateral músculo esternocleidomastoideo, medial músculos pretiroideos",
                        "Identificación y disección cuidadosa: vena yugular interna (lateral), nervio hipogloso (superior)",
                        "Protección nervio vago en vaina carotídea, rama externa laríngeo recurrente",
                        "Exposición limitada zona infectada preservando integridad del stent-graft",
                        "Explantación meticulosa parche infectado sin tracción excesiva del endoprótesis",
                        "Desbridamiento selectivo tejido necrótico hasta sangrado viable",
                        "Toma de muestras microbiológicas múltiples (mínimo 5 cultivos diferentes sitios)",
                        "Irrigación copiosa pulsátil con solución antibiótica tibia (vancomicina 2mg/ml + gentamicina 80mg/250ml)",
                        "Hemostasia perfecta con electrocauterio bipolar, evitando lesión térmica stent",
                        "Verificación integridad stent-graft mediante palpación suave y angiografía intraoperatoria"
                    ]
                },
                {
                    "fase": "PASO 3: Terapia VAC Avanzada (Presión Negativa Controlada)",
                    "pasos": [
                        "Selección esponja V.A.C.® Black Foam (porosidad 400-600 micrones) según defecto",
                        "Recorte anatómico preciso: forma cóncava adaptada a contorno cervical",
                        "Colocación estratificada: contacto íntimo con stent-graft y tejidos perivasculares",
                        "Evitar presión excesiva sobre estructuras nobles (nervios craneales, vía aérea)",
                        "Aplicación película adhesiva TRAC-Pad con sellado hermético progresivo",
                        "Conexión sistema V.A.C.® con tubo T.R.A.C.® y reservorio de 300ml",
                        "Inicio terapia: presión negativa continua -125mmHg x 48h (fase inflamatoria)",
                        "Transición terapia intermitente: 5 minutos ON / 2 minutos OFF (fase proliferativa)",
                        "Monitorización continua: integridad sellado, volumen drenado, características exudado",
                        "Documentación fotográfica seriada evolución herida",
                        "Protocolos recambio: 48-72h inicial, luego 5-7 días según evolución",
                        "Traslado UCI con monitorización neurológica continua (Glasgow, pares craneales)"
                    ]
                }
            ],
            "seguimiento": [
                {
                    "periodo": "Fase Aguda (0-7 días)",
                    "frecuencia": "Vigilancia continua UCI, luego diaria en planta",
                    "examenes": "Examen neurológico c/4h, hemograma diario, PCR/VSG, función renal",
                    "imaging": "Eco-Doppler carotídeo diario, angio-TC control si deterioro neurológico"
                },
                {
                    "periodo": "Fase VAC (1-6 semanas)",
                    "frecuencia": "Recambios cada 3-7 días según evolución",
                    "examenes": "Cultivos seriados VAC, PCR bisemanal, evaluación granulación tisular",
                    "imaging": "Eco-Doppler semanal, vigilancia permeabilidad stent-graft"
                },
                {
                    "periodo": "Fase Consolidación (6 semanas-3 meses)",
                    "frecuencia": "Visitas semanales luego quincenales",
                    "examenes": "Examen clínico completo, marcadores inflamatorios semanales",
                    "imaging": "Eco-Doppler mensual, angio-TC a los 3 meses"
                },
                {
                    "periodo": "Seguimiento Largo Plazo (>3 meses)",
                    "frecuencia": "Trimestral primer año, luego semestral",
                    "examenes": "Evaluación clínica, PCR trimestral hasta normalización",
                    "imaging": "Eco-Doppler trimestral, PET-CT a 6 y 12 meses, luego según clínica"
                }
            ],
            "resultados_estudios": [
                {
                    "autor": "Thorbjørnsen et al. 2016",
                    "revista": "European Journal of Vascular and Endovascular Surgery",
                    "n": 17,
                    "localizaciones": "6 carotídeos, 3 cervicales, 2 fémoro-poplíteos, 3 femorales, 2 accesos",
                    "exito_tecnico": "100%",
                    "mortalidad_30d": "0%",
                    "curacion_infeccion": "100%",
                    "seguimiento": "60 meses (1-90)",
                    "reinfeccion": "0%",
                    "complicaciones": "ACV transitorio (5.9%), trombosis stent (5.9%)"
                },
                {
                    "autor": "Shehab et al. 2024",
                    "revista": "Journal of Vascular Surgery Cases",
                    "n": 9,
                    "localizaciones": "Parches carotídeos sintéticos",
                    "exito_tecnico": "100%",
                    "mortalidad_30d": "0%",
                    "curacion_infeccion": "100%",
                    "seguimiento": "91 meses (2.4-166)",
                    "reinfeccion": "0%",
                    "complicaciones": "Reintervención stent 33%, oclusión tardía 11%"
                },
                {
                    "autor": "Chan et al. 2023",
                    "revista": "Journal of Vascular Surgery Cases",
                    "n": 1,
                    "localizaciones": "Parche carotídeo Dacron",
                    "exito_tecnico": "100%",
                    "mortalidad_30d": "0%",
                    "curacion_infeccion": "100%",
                    "seguimiento": "12 meses",
                    "reinfeccion": "0%",
                    "complicaciones": "Ninguna reportada"
                }
            ]
        };

        this.currentSort = { column: null, direction: 'asc' };
        this.filteredDevices = [...this.data.dispositivos];
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupAccordions();
        this.populateDevicesTable();
        this.setupTableInteractions();
        this.populateProcedureSteps();
        this.populateFollowUpTimeline();
        this.populateStudiesTable();
        this.setupTooltips();
    }

    // Navigation functionality
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.content-section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                
                // Update active navigation
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Show target section
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    
                    // Smooth scroll to top of main content
                    const mainContent = document.querySelector('.main-content');
                    mainContent.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Accordion functionality
    setupAccordions() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const isActive = accordionItem.classList.contains('active');
                
                // Close all accordion items
                accordionHeaders.forEach(h => {
                    h.parentElement.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    accordionItem.classList.add('active');
                }
            });
        });
    }

    // Populate devices table with specific product links
    populateDevicesTable() {
        const tbody = document.getElementById('devices-tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        
        this.filteredDevices.forEach(device => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${device.nombre}</strong></td>
                <td>${device.tipo}</td>
                <td>${device.diametros}</td>
                <td>${device.longitudes}</td>
                <td>${device.introductor}</td>
                <td>${device.costo_usd}</td>
                <td>
                    <div class="french-compatibility">
                        ${device.french_compatibility}
                    </div>
                </td>
                <td>
                    <a href="${device.link}" target="_blank" class="device-link">
                        Producto específico
                    </a>
                    <div class="device-characteristics" style="margin-top: 8px; font-size: 11px;">
                        <strong>Características:</strong> ${device.caracteristicas}<br>
                        <strong>Indicaciones:</strong> ${device.indicaciones}
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    // Table interactions (search, filter, sort)
    setupTableInteractions() {
        // Search functionality
        const searchInput = document.getElementById('device-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterDevices(e.target.value, document.getElementById('device-filter').value);
            });
        }

        // Filter functionality
        const filterSelect = document.getElementById('device-filter');
        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => {
                this.filterDevices(document.getElementById('device-search').value, e.target.value);
            });
        }

        // Sort functionality
        const sortableHeaders = document.querySelectorAll('[data-sort]');
        sortableHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const column = header.getAttribute('data-sort');
                this.sortTable(column);
            });
        });
    }

    filterDevices(searchTerm, filterType) {
        this.filteredDevices = this.data.dispositivos.filter(device => {
            const matchesSearch = searchTerm === '' || 
                device.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                device.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                device.caracteristicas.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesFilter = filterType === '' ||
                device.tipo.toLowerCase().includes(filterType.toLowerCase());

            return matchesSearch && matchesFilter;
        });
        
        this.populateDevicesTable();
    }

    sortTable(column) {
        const direction = this.currentSort.column === column && this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        
        this.filteredDevices.sort((a, b) => {
            let aVal = a[column];
            let bVal = b[column];
            
            // Handle numeric sorting for cost
            if (column === 'costo_usd') {
                aVal = parseInt(aVal.split('-')[0]);
                bVal = parseInt(bVal.split('-')[0]);
            }
            
            if (aVal < bVal) return direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        
        this.currentSort = { column, direction };
        
        // Update sort arrows
        document.querySelectorAll('.sort-arrow').forEach(arrow => {
            arrow.textContent = '↕';
        });
        
        const currentHeader = document.querySelector(`[data-sort="${column}"] .sort-arrow`);
        if (currentHeader) {
            currentHeader.textContent = direction === 'asc' ? '↑' : '↓';
        }
        
        this.populateDevicesTable();
    }

    // Populate procedure steps with detailed information
    populateProcedureSteps() {
        const container = document.getElementById('procedure-steps');
        if (!container) return;

        container.innerHTML = '';
        
        this.data.procedimiento_pasos.forEach(step => {
            const stepElement = document.createElement('div');
            stepElement.className = 'procedure-step';
            
            const stepList = step.pasos.map(paso => `<li>${paso}</li>`).join('');
            
            stepElement.innerHTML = `
                <div class="step-header">
                    ${step.fase}
                </div>
                <div class="step-content">
                    <ol class="step-list">
                        ${stepList}
                    </ol>
                </div>
            `;
            
            container.appendChild(stepElement);
        });
    }

    // Populate follow-up timeline with detailed phases
    populateFollowUpTimeline() {
        const container = document.getElementById('follow-up-timeline');
        if (!container) return;

        container.innerHTML = '';
        
        this.data.seguimiento.forEach(period => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-period">${period.periodo}</div>
                <div class="timeline-details">
                    <p><strong>Frecuencia:</strong> ${period.frecuencia}</p>
                    <p><strong>Exámenes:</strong> ${period.examenes}</p>
                    <p><strong>Imagenología:</strong> ${period.imaging}</p>
                </div>
            `;
            
            container.appendChild(timelineItem);
        });
    }

    // Populate studies table with detailed results
    populateStudiesTable() {
        const tbody = document.getElementById('studies-tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        
        this.data.resultados_estudios.forEach(study => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <strong>${study.autor}</strong><br>
                    <em>${study.revista}</em>
                </td>
                <td>${study.n}</td>
                <td style="font-size: 11px;">${study.localizaciones}</td>
                <td><span class="status status--success">${study.exito_tecnico}</span></td>
                <td><span class="status status--success">${study.mortalidad_30d}</span></td>
                <td><span class="status status--success">${study.curacion_infeccion}</span></td>
                <td>${study.seguimiento}</td>
                <td style="font-size: 11px;">${study.complicaciones}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Setup tooltips for technical information
    setupTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            let tooltip = null;
            
            element.addEventListener('mouseenter', (e) => {
                const tooltipText = element.getAttribute('data-tooltip');
                
                tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = tooltipText;
                tooltip.style.cssText = `
                    position: absolute;
                    background: var(--color-charcoal-800);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    z-index: 1000;
                    max-width: 200px;
                    word-wrap: break-word;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                `;
                
                document.body.appendChild(tooltip);
                
                const rect = element.getBoundingClientRect();
                tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
            });
            
            element.addEventListener('mouseleave', () => {
                if (tooltip) {
                    document.body.removeChild(tooltip);
                    tooltip = null;
                }
            });
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EndoVACApp();
});

// Additional utility functions for professional medical interface

// Smooth scrolling utility
function smoothScroll(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Professional hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add professional hover effects to buttons and links
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .accordion-header, .device-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Enhanced table interactions
    const deviceLinks = document.querySelectorAll('.device-link');
    deviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track clicks for analytics (if needed)
            console.log('Product link clicked:', this.href);
        });
    });
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EndoVACApp;
}