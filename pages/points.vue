<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Système de calcul des points</h1>
      <p>
        Le système d’attribution des points PaLM est fondé sur la difficulté théorique de la performance
        enregistrée. Cette difficulté correspond au pourcentage de joueurs qui devraient obtenir ce
        résultat ou mieux en moyenne.
      </p>
      <p>
        De plus, chaque participant reçoit un point de participation. Si un top 8 est joué,
        les joueurs du top 8 reçoivent un point supplémentaire,
        tout comme les participants à un PaLM qualifier. Les tableaux ci-dessous récapitulent les
        points pour les résultats les plus courants.
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">Rondes Suisses</span>
              </p>
            </td>
            <td colspan="5">
              <p>
                <span style="font-weight: 400;">PaLM Points</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">Match Points</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">3 Rondes</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">4 Rondes</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">5 Rondes</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">6 Rondes</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">7 Rondes</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>0</strong>
                <span style="font-weight: 400;">-1</span>
              </p>
            </td>
            <td>
              <p>
                <strong>1</strong>
              </p>
            </td>
            <td rowspan="3">
              <p>
                <strong>1</strong>
              </p>
            </td>
            <td rowspan="3">
              <p>
                <strong>1</strong>
              </p>
            </td>
            <td rowspan="3">
              <p>
                <strong>1</strong>
              </p>
            </td>
            <td rowspan="6">
              <p>
                <strong>1</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">2-</span>
                <strong>3</strong>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">2</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">4-5</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">3</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>6</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>4</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>2</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>2</strong>
              </p>
            </td>
            <td rowspan="3">
              <p>
                <strong>2</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">7</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">7</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">3</span>
              </p>
            </td>
            <td rowspan="2">
              <p>
                <span style="font-weight: 400;">3</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">8</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">-</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">4</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>9</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>10</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>5</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>4</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>3</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>2</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">10</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">9</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">6</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">4</span>
              </p>
            </td>
            <td rowspan="2">
              <p>
                <span style="font-weight: 400;">3</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">11</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">-</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">7</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">5</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">12</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>
              <p>
                <strong>13</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>8</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>6</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>4</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">13</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">12</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">8</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">5</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">14</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">-</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">9</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">6</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">15</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <strong>16</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>11</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>7</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">16</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">15</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">10</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">17</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">-</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">11</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">18</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <strong>19</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>13</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">19</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <span style="font-weight: 400;">17</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">21</span>
              </p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                <strong>22</strong>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">Top 8</span>
              </p>
            </td>
            <td colspan="5">
              <p>
                <span style="font-weight: 400;">PaLM Points</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;"># Players</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">9 - 11</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">12 - 15</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">16 - 22</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">23 - 28</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">29 - 35</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">1er</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">12</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">13</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">15</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">16</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">17</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">2&egrave;me</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">9</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">10</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">12</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">13</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">14</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">3&amp;4&egrave;me</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">6</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">7</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">9</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">10</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">11</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">5-8&egrave;me</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">-</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">-</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">6</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">7</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">8</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">Top 8</span>
              </p>
            </td>
            <td colspan="5">
              <p>
                <span style="font-weight: 400;">PaLM Points</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;"># Players</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">36 - 45</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">46 - 57</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">58 - 71</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">72 - 90</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">91 - 114</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">1er</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">18</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">19</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">20</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">21</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">22</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">2&egrave;me</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">15</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">16</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">17</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">17</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">17</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">3&amp;4&egrave;me</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">12</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">13</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">14</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">14</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">14</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span style="font-weight: 400;">5-8&egrave;me</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">9</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">10</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">11</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">11</span>
              </p>
            </td>
            <td>
              <p>
                <span style="font-weight: 400;">11</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </v-flex>
  </v-layout>
</template>

<style>
table,
th,
td {
  border: 1px solid white;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
}
td,
th {
  text-align: center;
  vertical-align: middle;
  padding: 0.2em;
}
</style>