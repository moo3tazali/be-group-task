// cSpell: disable

export const certifications = [
  {
    id: 1,
    name: 'شهادة أخصائي محترف في القيادة الإدارية CBP-LS',
    description: `تزويد المتدربين بالمبادىء والمفاهيم والمنهجيات الأساسية في مجال
    القيادة الإدارية
    <br />
    وذلك من خلال تدريبات عملية وسيناريوهات محاكية لمواقف الحياة
    الحقيقية بهدف تطوير مهارات المتدربين القياديه واكسابهم اساسيات
    القيادة المناسبة والفعالة في بيئات العمل المختلفة.`,
  },
  {
    id: 2,
    name: 'شهادة محترف إدارة المشاريع PMP',
    description: `إعداد المتدربين لتخطيط وتنظيم وإدارة المشاريع بشكل فعال
    <br />
    من خلال تدريب عملي ودراسة حالات واقعية لتطوير مهاراتهم في إدارة المشاريع.`,
  },
  {
    id: 3,
    name: 'شهادة محترف في التحليل المالي CFA',
    description: `تعريف المتدربين بالمفاهيم والمبادئ الأساسية في التحليل المالي
    <br />
    وتشمل تدريبات عملية ودراسات حالة لتحسين قدراتهم في التحليل المالي.`,
  },
  {
    id: 4,
    name: 'شهادة محترف في التسويق الرقمي DMCP',
    description: `تزويد المتدربين بالأدوات والتقنيات الحديثة في مجال التسويق الرقمي
    <br />
    من خلال تدريبات عملية وحالات دراسية لتعزيز مهاراتهم التسويقية.`,
  },
  {
    id: 5,
    name: 'شهادة محترف في إدارة الموارد البشرية HRMP',
    description: `إعداد المتدربين لإدارة الموارد البشرية بفعالية
    <br />
    عبر تدريب عملي ودراسات حالة لتحسين مهاراتهم في هذا المجال.`,
  },
  {
    id: 6,
    name: 'شهادة محترف في الأمن السيبراني CSP',
    description: `تعريف المتدربين بأفضل الممارسات في مجال الأمن السيبراني
    <br />
    وتزويدهم بمهارات عملية من خلال تدريبات ودراسات حالة.`,
  },
  {
    id: 7,
    name: 'شهادة محترف في تحليل البيانات DAP',
    description: `تزويد المتدربين بالمفاهيم والأدوات الأساسية في تحليل البيانات
    <br />
    مع تدريبات عملية لتحسين قدراتهم في تحليل البيانات.`,
  },
  {
    id: 8,
    name: 'شهادة محترف في إدارة المخاطر RMP',
    description: `تعريف المتدربين بمفاهيم إدارة المخاطر وتزويدهم بمهارات عملية
    <br />
    من خلال تدريبات وحالات دراسية لتحسين قدرتهم على إدارة المخاطر.`,
  },
  {
    id: 9,
    name: 'شهادة محترف في البرمجة المتقدمة ACP',
    description: `تزويد المتدربين بمهارات البرمجة المتقدمة من خلال تدريبات عملية
    <br />
    ودراسات حالة لتحسين قدراتهم في تطوير البرمجيات.`,
  },
  {
    id: 10,
    name: 'شهادة محترف في الذكاء الاصطناعي AIP',
    description: `تعريف المتدربين بالمفاهيم والأدوات الأساسية في مجال الذكاء الاصطناعي
    <br />
    مع تدريبات عملية لتحسين مهاراتهم في تطبيقات الذكاء الاصطناعي.`,
  },
];

const certificationsContainer = document.getElementById('certifications');
const loadMoreButton = document.getElementById('load-more');

let displayedCount = 0;
const limit = 4;

// Function to render certifications
export function renderCertifications() {
  const toDisplay = certifications.slice(
    displayedCount,
    displayedCount + limit
  );

  toDisplay.forEach((certification) => {
    const card = document.createElement('div');
    card.classList.add(
      'card',
      'certification-card',
      'p-0',
      'mb-3',
      'rounded-4'
    );
    card.innerHTML = `
      <img
        src="./certifications/${certification.id}.webp"
        class="card-img-top"
        alt="${certification.name}"
        loading="lazy"
      />
      <div class="card-body">
        <h4 class="card-title text-center text-secondary">${certification.name}</h4>
        <p class="card-text text-center">
          ${certification.description}
        </p>
        <a
          href="#"
          style="width: fit-content"
          class="btn btn-outline-dark mt-5 rounded-3 border d-block mx-auto border-secondary-subtle fw-bold"
          >تعرف علي المزيد</a
        >
      </div>
  `;

    certificationsContainer.appendChild(card);
    // Trigger the animation
    setTimeout(() => {
      card.classList.add('visible');
    }, 100);
  });

  displayedCount += toDisplay.length;
  if (displayedCount >= certifications.length) {
    loadMoreButton.style.display = 'none';
  }
}

// Event listener for Load More button
loadMoreButton.addEventListener('click', renderCertifications);
