// // Dark mode


// //

//   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//     if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark')
//     }

//     var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
// var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// // Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
// }

// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }

//     // if NOT set via local storage previously
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
    
// });


// // close btn
// // document.getElementById('closeSidebar').addEventListener('click', function() {
// //   const sidebar = document.getElementById('logo-sidebar');
// //   sidebar.classList.add('-translate-x-full'); 
// // });




// //تجربة كود اغلاق السايد بار بدون تعديل وضع الثيم

// document.getElementById('closeSidebar').addEventListener('click', function(e) {
//   e.preventDefault(); // لمنع أي سلوك افتراضي (مثل إعادة تحميل الصفحة إذا كان الزر داخل <form>)
//   const sidebar = document.getElementById('logo-sidebar');
//   sidebar.classList.add('-translate-x-full'); 
  
//   // (اختياري) إزالة أي كلاسات أخرى متعلقة بالعرض إذا لزم الأمر
//   sidebar.classList.remove('translate-x-0'); 
// });



// // دالة لتبديل الثيم وتحديث الأيقونات
// function toggleTheme() {
//   const html = document.documentElement;
//   html.classList.toggle('dark');
  
//   // حفظ التفضيل
//   const isDark = html.classList.contains('dark');
//   localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
//   // تحديث الأيقونات
//   updateIcons(isDark);
// }






// // دالة لتحديث حالة الأيقونات
// function updateIcons(isDark) {
//   const sunIcons = document.querySelectorAll('.fa-sun');
//   const moonIcons = document.querySelectorAll('.fa-moon');
  
//   sunIcons.forEach(icon => {
//     icon.style.display = isDark ? 'none' : 'block';
//   });
  
//   moonIcons.forEach(icon => {
//     icon.style.display = isDark ? 'block' : 'none';
//   });
// }

// // تعيين الأحداث لكلا الزرين
// document.getElementById('theme-toggle-header')?.addEventListener('click', toggleTheme);
// document.getElementById('theme-toggle-sidebar')?.addEventListener('click', toggleTheme);



// // تعيين الأحداث لكلا الزرين
// document.querySelectorAll('.theme-btn').forEach(btn => {
//   btn.addEventListener('click', toggleTheme);
// });




// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme') || 
//                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
//   if (savedTheme === 'dark') {
//     document.documentElement.classList.add('dark');
//     // إظهار أيقونات القمر وإخفاء الشمس
//     document.querySelectorAll('.fa-moon').forEach(icon => icon.classList.remove('hidden'));
//   } else {
//     // إظهار أيقونات الشمس وإخفاء القمر
//     document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.remove('hidden'));
//   }
// });


// // التهيئة عند تحميل الصفحة
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
//   if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//     document.documentElement.classList.add('dark');
//     updateIcons(true);
//   } else {
//     updateIcons(false);
//   }
// });





///////////////////////////

// Initialize theme on page load
function initializeTheme() {
  // Check local storage first, then system preference
  const savedTheme = localStorage.getItem('color-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    updateIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateIcons(false);
  }
}






// function updateIcons(isDark) {
//   // للأيقونات الرئيسية
//   const sunIcons = document.querySelectorAll('.fa-sun');
//   const moonIcons = document.querySelectorAll('.fa-moon');
  
//   sunIcons.forEach(icon => {
//     if(isDark) {
//       icon.classList.add('hidden');
//     } else {
//       icon.classList.remove('hidden');
//     }
//   });
  
//   moonIcons.forEach(icon => {
//     if(isDark) {
//       icon.classList.remove('hidden');
//     } else {
//       icon.classList.add('hidden');
//     }
//   });
// }

// Update icons visibility
function updateIcons(isDark) {
  const sunIcons = document.querySelectorAll('.fa-sun');
  const moonIcons = document.querySelectorAll('.fa-moon');
  
  sunIcons.forEach(icon => {
    icon.classList.toggle('hidden', isDark);
  });
  
  moonIcons.forEach(icon => {
    icon.classList.toggle('hidden', !isDark);
  });
}

// Toggle theme function
function toggleTheme() {
  const html = document.documentElement;
  const isDark = !html.classList.contains('dark');
  
  // Toggle dark class
  html.classList.toggle('dark', isDark);
  
  // Save preference
  localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  
  // Update icons
  updateIcons(isDark);
}

// Setup theme toggle buttons
function setupThemeToggles() {
  // Main theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  
  // Additional theme buttons
  document.querySelectorAll('.theme-btn, #theme-toggle-header, #theme-toggle-sidebar').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

// Close sidebar function
function setupSidebarClose() {
  const closeBtn = document.getElementById('closeSidebar');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const sidebar = document.getElementById('logo-sidebar');
      if (sidebar) {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  setupThemeToggles();
  setupSidebarClose();
});



// تزايد العداد

document.addEventListener('DOMContentLoaded', () => {
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const duration = 2000; // مدة التأثير بالمللي ثانية
    const startTime = Date.now();
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
    //   const target = parseInt(counter.textContent);
      const startCount = 0;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        
        counter.textContent = current;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '';
        }
      };
      
      // بدء العد عند ظهور العنصر
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  };
  
  animateCounters();
});











////////////////////////
// function switchTab(tabName) {
//   // Hide all contents
//   document.getElementById('work-content').classList.add('hidden');
//   document.getElementById('education-content').classList.add('hidden');
  
//   // Reset all tabs
//   document.getElementById('work-tab').classList.remove('bg-blue-600', 'text-white');
//   document.getElementById('work-tab').classList.add('bg-gray-200', 'text-gray-700');
//   document.getElementById('education-tab').classList.remove('bg-blue-600', 'text-white');
//   document.getElementById('education-tab').classList.add('bg-gray-200', 'text-gray-700');
  
//   // Show selected content
//   document.getElementById(`${tabName}-content`).classList.remove('hidden');
  
//   // Highlight selected tab
//   document.getElementById(`${tabName}-tab`).classList.remove('bg-gray-200', 'text-gray-700');
//   document.getElementById(`${tabName}-tab`).classList.add('bg-blue-600', 'text-white');
// }


function switchTab(tabName) {
  // Hide all contents
  document.getElementById('work-content').classList.add('hidden');
  document.getElementById('education-content').classList.add('hidden');
  
  // Reset all tabs (remove background only, keep text white)
  document.getElementById('work-tab').classList.remove('bg-[#612bcc]');
  document.getElementById('education-tab').classList.remove('bg-[#612bcc]');
  
  // Show selected content
  document.getElementById(`${tabName}-content`).classList.remove('hidden');
  
  // Highlight selected tab (add background to active tab)
  document.getElementById(`${tabName}-tab`).classList.add('bg-[#612bcc]');
}


//--------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//   const circles = document.querySelectorAll('.skill-circle');
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const circle = entry.target;
//         const percent = parseInt(circle.getAttribute('data-percent'));
//         const fill = circle.querySelector('.progress-ring-fill');
//         const text = circle.querySelector('.percent-text');
        
//         // حساب حركة الدائرة
//         const radius = 45;
//         const circumference = 2 * Math.PI * radius;
//         const offset = circumference - (percent / 100) * circumference;
        
//         // بدء الحركة
//         setTimeout(() => {
//           fill.style.strokeDashoffset = offset;
          
//           // عد تصاعدي للنسبة
//           let current = 0;
//           const interval = setInterval(() => {
//             current++;
//             text.textContent = `${current}%`;
//             if (current >= percent) {
//               clearInterval(interval);
//               circle.classList.add('complete');
//             }
//           }, 2000 / percent); // مدة العد: 2 ثانية
//         }, 300);
        
//         observer.unobserve(circle);
//       }
//     });
//   }, { threshold: 0.5 });

//   circles.forEach(circle => observer.observe(circle));
// });


document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.getElementById('skill-bg');
  const circles = document.querySelectorAll('.skill-circle');
  
  const animateCircles = () => {
    circles.forEach(circle => {
      // إعادة تعيين الحالة الأولية
      const fill = circle.querySelector('.progress-ring-fill');
      const text = circle.querySelector('.percent-text');
      const percent = parseInt(circle.getAttribute('data-percent'));
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      
      fill.style.strokeDashoffset = circumference;
      text.textContent = '0%';
      circle.classList.remove('complete');
      
      // بدء الحركة
      setTimeout(() => {
        const offset = circumference - (percent / 100) * circumference;
        fill.style.strokeDashoffset = offset;
        
        let current = 0;
        const interval = setInterval(() => {
          current++;
          text.textContent = `${current}%`;
          if (current >= percent) {
            clearInterval(interval);
            circle.classList.add('complete');
          }
        }, 2000 / percent);
      }, 300);
    });
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCircles();
      }
    });
  }, { threshold: 0.1 });
  
  sectionObserver.observe(skillsSection);
});
///////////



document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  // دالة تحريك الشريط
  function animateBar(bar) {
    const progress = bar.querySelector(".progress-content");
    const percentLabel = bar.querySelector(".progress-mark-percent");
    const targetPercent = parseInt(bar.getAttribute("data-percentage"), 10);

    // إذا تم التحريك مسبقًا، نوقف لتجنب إعادة التحريك
    if (bar.dataset.animated) return;

    progress.style.width = "0%";
    percentLabel.textContent = "0%";

    let current = 0;
    const animate = setInterval(() => {
      if (current >= targetPercent) {
        clearInterval(animate);
      } else {
        current++;
        progress.style.width = current + "%";
        percentLabel.textContent = current + "%";
        percentLabel.style.left = current + "%";
      }
    }, 15);

    // نعلم أن هذا الشريط تم تحريكه
    bar.dataset.animated = "true";
  }

  // نتحقق عند تحميل الصفحة إذا القسم ظاهر بالفعل
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      animateBar(bar);
    }
  });

  // نتحقق عند التمرير
  window.addEventListener("scroll", () => {
    skillBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        animateBar(bar);
      }
    });
  });
});
