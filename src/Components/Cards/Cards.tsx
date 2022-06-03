import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, SvgIconTypeMap, Typography } from '@mui/material'
import './Cards.css'
import GradingIcon from '@mui/icons-material/Grading';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BoyIcon from '@mui/icons-material/Boy';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AssignmentIcon from '@mui/icons-material/Assignment';

interface MenuProps {
    title: String,
    icon: number,
    description: String,
}

export const Cards = (props: any) => {
    const { menuItem } = props
    const { title, icon, description } = menuItem

    const icons: any = {
        SupervisorAccountIcon: <SupervisorAccountIcon fontSize='large' />,
        GradingIcon: <GradingIcon fontSize='large' />,
        BoyIcon: <BoyIcon fontSize='large' />,
        AssignmentIcon: <AssignmentIcon fontSize='large' />,
        EqualizerIcon: <EqualizerIcon fontSize='large' />,
    }

    return (
        <Card className='card-menu'>
            <CardActionArea>
                <CardContent >
                    <Typography style={{ display: 'flex', justifyContent: 'space-between' }} gutterBottom variant="h5" component="div">
                        {title} {icons[icon]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
