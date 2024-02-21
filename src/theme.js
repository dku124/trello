import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '80px'
const BOARD_BAR_HEIGHT = '80px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeightL: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          /* width */
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            opacity: '0.4',
            borderRadius: '6px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#fff',
            cursor: 'pointer'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          // color:'#fff',
          borderWidth: '0.5px !important',
          '&:hover': {
            borderWidth: '1px !important'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '1px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    },
    MuiTypography:{
      styleOverrides:{
        root:{
          '&.MuiTypography-body1':{ fontSize:'0.875rem'}
        }
      }
    }
  }
})
export default theme