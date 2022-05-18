import React from 'react';
import {Table} from "react-bootstrap";

const TableChamp = () => {
    return (
        <div>
            <Table style={{zIndex: 100}} striped bordered hover variant="dark">
                <thead >
                <tr>
                    <th>№</th>
                    <th className="d-none d-lg-block">Команда</th>
                    <th className="d-block d-lg-none"></th>
                    <th>И</th>
                    <th>В</th>
                    <th>ОТВ</th>
                    <th>П</th>
                    <th>ОТП</th>
                    <th>ШВ</th>
                    <th>+/-</th>
                    <th>О</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td className="d-flex align-items-center">
                        <img className="logo-table "
                             src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                        /><div style={{fontSize:14}} className="d-none d-lg-block">
                        ИРБИС</div>
                    </td>
                    <td>14</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className="d-flex align-items-center">
                        <img className="logo-table "
                             src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                        /><div style={{fontSize:14}} className="d-none d-lg-block">
                        ТЕХНИК</div>
                    </td>
                    <td>14</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td className="d-flex align-items-center">
                        <img className="logo-table "
                             src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                     /><div style={{fontSize:14}} className="d-none d-lg-block">
                        КОЛЬЧУГА</div>
                    </td>
                    <td>14</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td  className="d-flex align-items-center"> <img className="logo-table "
                               src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                    /><div style={{fontSize:14}} className="d-none d-lg-block">ЯМАЛ</div></td>
                    <td>14</td>
                    <td>7</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td  className="d-flex align-items-center"> <img className="logo-table "
                               src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                    /><div style={{fontSize:14}} className="d-none d-lg-block">СЕСТР. БОБРЫ</div></td>
                    <td>14</td>
                    <td>5</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td  className="d-flex align-items-center"> <img className="logo-table "
                               src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                    /><div style={{fontSize:14}} className="d-none d-lg-block">СПАРТАК</div></td>
                    <td>14</td>
                    <td>3</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td  className="d-flex align-items-center"> <img className="logo-table "
                               src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                    /><div style={{fontSize:14}} className="d-none d-lg-block">СЕВ. ВОЛКИ</div></td>
                    <td>14</td>
                    <td>3</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td  className="d-flex align-items-center"> <img className="logo-table "
                               src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"
                    /><div style={{fontSize:14}} className="d-none d-lg-block">ОЛИМП (НН)</div></td>
                    <td>14</td>
                    <td>1</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TableChamp;