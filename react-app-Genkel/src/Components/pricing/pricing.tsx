import React from 'react';
import styles from './pricing.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { useServicePricingChildren, useServicePricingMan, useServicePricingWomen } from '../../Helper/service';

const Separator = () => <div style={{ height: '50px' }}></div>; // Simple separator component

const Pricing = ({ data }: any) => {
    const women = useServicePricingWomen();
    const man = useServicePricingMan();
    const children = useServicePricingChildren();

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.pricingContainer}>
                <h1>Preisliste</h1>
                {/* Women Pricing */}
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            {women.map((row: any) => (
                                <TableRow key={row.Leistung}>
                                    <TableCell component="th" scope="row">{row.Leistung}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte1}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte2}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte3}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Separator />
                {/* Children Pricing */}
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            {man.map((row: any) => (
                                <TableRow key={row.Leistung}>
                                    <TableCell component="th" scope="row">{row.Leistung}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte1}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte2}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte3}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Separator />
                {/* Children Pricing */}
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            {children.map((row: any) => (
                                <TableRow key={row.Leistung}>
                                    <TableCell component="th" scope="row">{row.Leistung}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte1}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte2}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte3}</TableCell>
                                    <TableCell align="right">{row.PreisSpalte4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className={styles.disclaimer}>
                    <p>* nach Aufwand und Produktverbrauch</p>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Pricing;
