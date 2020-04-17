import React from "react";

export const Grid = () => {

    const slots = Array(6*7).fill(null);

    return (
        <section>
            <ul className="game-board reset-list flex theme-blueberry">


                {slots.map((x,i)=>(
                    <li className="slot" key={i}></li>
                ))}
            {/* <table>
                <tbody>
                <tr>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                </tr>
                <tr>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                </tr>
                <tr>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                </tr>
                <tr>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                </tr>
                <tr>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                </tr>
                <tr>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                    <td className="slot"></td>
                </tr>
                </tbody>
            </table> */}
            </ul>

        </section>
    );
}