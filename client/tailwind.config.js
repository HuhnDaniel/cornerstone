module.exports = {
  content: ["./src/**/*.{html,js}"],
//   purge: [
//       './src/**/*.html',
//       '.src/**/*.js',
//   ],
  theme: {
        percentile: {        
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%'
        },
        extend: {
            backgroundImage: {
                none: 'none',
                'homepage': 'url("../images/cornerstone-background-sepia.jpg")',
                'contact': 'url("../images/contact-background.jpg")',
            },
            fontSize: {
                '2.5xl': '1.75rem',
            },
            spacing: {
                '14': '3.5rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '28': '7rem',
                '72': '18rem',
                '80': '20rem',
            },
            flex: {
                '2': '2 2 0%',
            },
            opacity: {
                '40': '0.4',
            },
            maxHeight: (theme) => ({
                ...theme('percentile'),
            }),
            minHeight: theme => ({
                ...theme('spacing'),
                ...theme('percentile'),
            }),
            height: theme => ({
                ...theme('percentile'),
            })
        },
    },
  plugins: [],
}
