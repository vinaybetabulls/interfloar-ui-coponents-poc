import {makeStyles} from '@material-ui/core';
import {colors} from '../corescss/colors';

export const Styles = makeStyles(()=> ({
    toolbar: {
        'height': '64px',
        'backgroundColor': '#000',
        'boxShadow': '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        'color': '#000',
        'display': 'flex',
        'flexDirection': 'row',
        'align-items': 'center',
        'justifyContent': 'space-between',
        'padding': '0 16px',

       '& h1': {
            'margin': 0,
            'padding': '8px',
            'height': '58px',

            '& img': {
                'height': '100%'
            }
       },
            '& ul': {
                'margin': '0',
                'padding': '0',
                
                '& li': {
                    'listStyle': 'none',
                    'display': 'inline',
                    'padding': '0 8px', // 0 8px 8px // top right bottom left

                    '& a': {
                        'textDecoration': 'none',
                        'color': colors.primaryColor
                    }
                }
            } 
    }
}))