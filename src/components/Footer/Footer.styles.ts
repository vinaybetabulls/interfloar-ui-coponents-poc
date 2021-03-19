import {makeStyles} from '@material-ui/core';
import {colors} from '../corescss/colors';

export const Styles = makeStyles(()=> ({ 
    'footer': {
        backgroundColor: colors.secondaryColor,
        height: '64px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign:'center',
        

        '& p': {
            'text-align': 'center',
            color: colors.primaryColor
        }
    }

}))