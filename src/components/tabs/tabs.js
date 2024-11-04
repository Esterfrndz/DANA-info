import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'react-tabs/style/react-tabs.css'; // Estilos de react-tabs
import 'leaflet/dist/leaflet.css'; // Estilos de Leaflet
import L from 'leaflet'; // Para manejar los íconos de los marcadores
import '../tabs/tabs.css';

// Asegúrate de que Leaflet pueda cargar los iconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const townsData = [
    {
      name: 'Valencia',
      coordinates: [39.47326814109771, -0.3732392774260466],
      maps: [
        {
          title: 'Valencia',
          markers: [
            { position: [39.47690817271132, -0.3589335230620149], title: 'Mestalla', description: 'Alimentos y productos esenciales' },
            { position: [39.495041496807346, -0.3639001737311663], title: 'Citutat de Valencia', description: 'Alimentos y productos esenciales' },
            { position: [39.473242880707964, -0.3322306298610237], title: 'Parroquia de Los Ángeles', description: 'Alimentos y productos esenciales' },

            { position: [39.45994133973284, -0.3687333328423358], title: 'Valencia Basket', description: 'Comida,manta y atención sanitaria' },
            { position: [39.471543217074164, -0.34178777448160547], title: 'Avenida La Isla y Consell de Joventut de València (calle l’Alguer, 1)', description: 'Alimentos y productos esenciales' },
            { position: [39.46342104211101, -0.39253709160653183], title: 'Plaza Patraix,13B', description: 'Alimentos y productos esenciales' },
            { position: [39.47277484879345, -0.39605133465639436], title: 'Nou Moles', description: 'Alimentos y productos esenciales' },
            { position: [39.47277484879345, -0.39605133465639436], title: 'Avenida Benimaclet (Avenida Valladolid,42)', description: 'Alimentos y productos esenciales' },
            { position: [39.47523312280592, -0.395066944268809], title: 'Complejo deportivo La Petxina', description: 'Alimentos y productos esenciales' },
            { position: [39.47980846980056, -0.32676031338532174], title: 'MenejaT fit', description: 'Alimentos y productos esenciales' },
            { position: [39.46144919050952, -0.39428372026035774], title: 'El Cresol', description: 'Alimentos y productos esenciales' },
            { position: [39.44387880640723, -0.387667266173715], title: 'Falla Arzobispo Olaechea San Marcelino', description: 'Alimentos y productos esenciales' },
            { position: [39.44808556193582, -0.373558074274359], title: 'Malilla', description: 'Alimentos y productos esenciales' },
            { position: [39.471390775467896, -0.3871787860352621], title: 'El loco Club', description: 'Alimentos y productos esenciales' },
            { position: [39.479835811442776, -0.32695611845316636], title: 'Menejat', description: 'Alimentos y productos esenciales' },


           
          ],
        },

        // {
        //   title: 'Paterna',
        //   markers: [
        //     { position: [39.4240595209308, -0.4847568094663884], title: 'Pabellón del Vedat', description: 'Alimentos y productos esenciales' },
            
        //   ],
        // }
,
        {
          title: 'Torrente',
          markers: [
            { position: [39.4240595209308, -0.4847568094663884], title: 'Pabellón del Vedat', description: 'Alimentos y productos esenciales' },
            
          ],
        },{
            title: 'Ribarroja',
            markers: [
              
               { position: [39.543793866792186, -0.5732297379201022], title: 'CEIP Cervantes', description: 'Recolección de ropa de abrigo y mantas ' },
              
            ],
          },
          {
            title: 'Mislata',
            markers: [
              { position: [39.47906268238754, -0.42553598932582803], title: 'Pabellón El Quint', description: 'Alimentos y productos esenciales' },
             
            ],
          },
          {
            title: 'Alzira',
            markers: [
              { position: [39.15041747944272, -0.44300558655991384], title: 'Palacio de deportes Alzira', description: 'Alimentos y productos esenciales' },
             
            ],
          },
          {
            title: 'Alboraya',
            markers: [
              { position: [39.499779474009216, -0.3556592823348688], title: 'Ciutat de l’Esport', description: 'Alimentos y productos esenciales' },
             
            ],
          },
          {
            title: 'Catarroja',
            markers: [
              { position: [39.397419461752996, -0.39668583380109323], title: 'KMKZS GARAGE', description: 'Agua oxigenada, guantes, mascarilla, botas y batas impermeables' },
             
            ],
          },
      ],
    },
    {
      name: 'Alicante',
      coordinates: [38.34589819398777, -0.4908584920459973],
      maps: [
        {
          title: 'Alicante',
          markers: [
            { position: [38.35445044630662, -0.49465265156888966], title: 'Pabellón Pedro Ferrándiz', description: 'Alimentos y productos esenciales' },
            
          ],
        },
        // {
        //   title: 'Mapa B',
        //   markers: [
        //     { position: [34.0542, -118.2457], title: 'Ubicación C', description: 'Descripción de la ubicación C' },
        //     { position: [34.0592, -118.2423], title: 'Ubicación D', description: 'Descripción de la ubicación D' },
        //   ],
        // },
      ],
    },
    {
        name: 'Castellón',
        coordinates: [39.98587931578462, -0.05141059419145843],
        maps: [
          {
            title: 'Tetúan',
            markers: [
              { position: [40.001906186632795, -0.0552309766313087], title: 'Partida Bovalar', description: 'Alimentos y productos esenciales' },
              { position: [39.88293595852335, -0.24919397610717328], title: 'Camí Quadra', description: 'Alimentos y productos esenciales' },
              { position: [39.995035007580505, -0.03630442150117799], title: 'Cámara de agricultura', description: 'Alimentos y productos esenciales' },
              
            ],
          },
          // {
          //   title: 'Mapa B',
          //   markers: [
          //     { position: [34.0542, -118.2457], title: 'Ubicación C', description: 'Descripción de la ubicación C' },
          //     { position: [34.0592, -118.2423], title: 'Ubicación D', description: 'Descripción de la ubicación D' },
          //   ],
          // },
        ],
      },
      {
        name: 'Barcelona',
        coordinates: [41.38289261626774, 2.154115509846295],
        maps: [
          {
            title: 'Barcelona',
            markers: [
              { position: [41.41167688144891, 2.1922736411601518], title: 'Carrer de Bilbao, 212', description: 'Alimentos y productos esenciales' },
              { position: [41.41034459536112, 2.1985905239628445], title: 'Carrer Perú, 122', description: 'Alimentos y productos esenciales' },
              { position: [41.37340668695048, 2.1373898681413457], title: 'Bonitolojusto tattoo estudio', description: 'Alimentos y productos esenciales' },
              { position: [41.35430852003899, 2.09887632581259], title: 'Club de Cheerleading Bears Barcelona', description: 'Alimentos y productos esenciales' },
              { position: [41.427782681035794, 2.201814425816023], title: '8CountsGym', description: 'Alimentos y productos esenciales' },
              { position: [41.38924665118694, 2.165026439306081], title: 'Organització Juvenil Espanyola', description: 'Alimentos y productos esenciales' },
              { position: [41.37763573022366, 2.1586528699939618], title: 'Av.Mistral, 14', description: 'Alimentos y productos esenciales' },
              
            ],
          },
           {
            title: 'Castelldefels',
             markers: [
               { position: [41.41125919286869, 2.216377969995499], title: 'Av. Diagonal, 16, local 1', description: 'Alimentos y productos esenciales' },
              { position: [41.28538067975517, 1.9799099276617733], title: 'Centro cívico Frederic Mompou', description: 'Alimentos y productos esenciales' },
            ],
           },
           {
            title: 'Gavà',
             markers: [
               { position: [41.29604979755422, 2.0114170268519764], title: 'Carrer de la Maquina, 51', description: 'Alimentos y productos esenciales' },
              { position: [41.30687922086695, 1.998446568138288], title: 'Casa de València', description: 'Alimentos y productos esenciales' },
            ],
           },
           {
            title: 'Viladecans',
             markers: [
               { position: [39.50346510650977, -0.44320073452274106], title: 'C.Mayor, 41', description: 'Alimentos y productos esenciales' },
              { position: [41.30687922086695, 1.998446568138288], title: 'Casa de València', description: 'Alimentos y productos esenciales' },
            ],
           },
           {
            title: 'Cornellá de Llobregat',
             markers: [
               { position: [41.35328604351519, 2.0726433816322833], title: 'Carrer de Eduard Gibert i Riera, 29'
               , description: 'Alimentos y productos esenciales' },
              { position: [41.35940600442175, 2.0720425214204226], title: 'Federación Comarcal CGT Baix Llobregat', description: 'Alimentos y productos esenciales' },

              { position: [41.35460359802767, 2.0649091802216293], title: 'Esplai Vol i Vol', description: 'Alimentos y productos esenciales' },
              {position:[
              41.36155907044563, 2.0696662546489897], title: 'La Calderia', description: 'Alimentos y productos esenciales' },
              {position:[
                41.366783895909684, 2.0829227382025337], title: 'Penya Domino', description: 'Alimentos y productos esenciales' },
                {position:[
                  41.348335872703444, 2.074615141156524], title: 'Campo RCD Espanyol', description: 'Alimentos y productos esenciales' },
            ],
           },
        ],
      },
  ];
  



const TownTabs = () => {
    return (
     
      <Tabs>
        <TabList>
          {townsData.map((town, index) => (
            <Tab key={index}>{town.name}</Tab>
          ))}
        </TabList>
  
        {townsData.map((town, index) => (
          <TabPanel key={index}>
            
            <SubTabs maps={town.maps} />
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  
 const SubTabs = ({ maps }) => {
    return (
      <Tabs>
        <TabList>
          {maps.map((map, index) => (
            <Tab key={index}>{map.title}</Tab>
          ))}
        </TabList>
  
        {maps.map((map, index) => (
          <TabPanel key={index}>
            <MapContainer center={map.markers[0].position} zoom={12} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {map.markers.map((marker, idx) => (
                <Marker key={idx} position={marker.position}>
                  <Popup>
                    <div style={{ fontWeight: 'bold' }}>{marker.title}</div>
                    <br />
                    {marker.description}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  
  export default TownTabs;



