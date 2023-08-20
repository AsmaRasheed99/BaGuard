import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';

const AWSMap = () => {
  const apiKey = "v1.public.eyJqdGkiOiIxZGZjYTExNS00NDk1LTQwMmUtODBiMi04ZDU0ZGEzYmU5MjQifUY6ZITnlBFeuPLVOAg9oamlqpnAB9v18YKuAGYg_WfEhXx4z0gh1d4dLB0EMCnxCCEq-QnWYi_sHq-hC8k_1S1S_5kAsELqbWG-b1GBVHCiqywO_3gSxbXPc4EEq-IO-aqfCHePo-sP5olNPPDTc2lm-nwV3S12uv7DWHEKafRVD1P_zDBu6aCU9NTnwiaDm9vgCHijMrrQeo0pAzO-G-7SCYEpmc-VZiZqZ_rhPZluW9aqSIAs8boHLFFxdcEV8qCGHS_YBl1va2HfBT1TPTi1spcU-Ve3pRiI4opNenRAwm8QyhcLNzjTHgA7quQCGbGqgvhRMM0z19rsVqZttRI.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
  const mapName = "Bagguard";
  const region = "us-east-1";

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
      center: [-123.115898, 49.295868],
      zoom: 11,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-left");

    return () => {
      map.remove();
    };
  }, []);

  return <div className='h-96 lg:w-1/2 pt-20 ' id="map"></div>;
};

export default AWSMap;
