import { Cards } from '../Cards/Cards'
import './Menu.css'
import { MENUITEMS } from "../../Constants/MENUITEMS"
import { Grid } from '@mui/material'

interface MenuProps {
  title: String,
  icon: String,
  description: String,
}

export const Menu = () => {
  return (
    <div>
      <h4>Estas son tus acciones disponibles, si necesitas más, puedes pedir acceso a tu supervisor</h4>
      <Grid container spacing={2}>
        {MENUITEMS.map((item: MenuProps) => (
          <Grid item xs={12} md={4}>
            <Cards menuItem={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
