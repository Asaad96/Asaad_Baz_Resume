module.exports = {
  content: ["./src/**/*.{html,js}"
    "./dist/assets/css/style.css"
  ], 
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}


}

@layer components {
  
  
  .title-section {
    @apply ml-2 mt-8;       /* افتراضي للموبايل + التابلت العمودي */
  }

  @screen md {
    .title-section {
      @apply ml-2 ;     /* يظل نفس الشيء للتابلت العمودي */
    }
  }

  @screen lg {
    .title-section {
      @apply ml-4 ;     /* لابتوب صغير وما فوق */
    }
  }

  @screen xl {
    .title-section {
      @apply ml-4 ;     /* شاشات أكبر */
    }
  }
}
