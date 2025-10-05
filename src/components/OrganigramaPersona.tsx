import React, { useEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";

interface Persona {
  id: string;
  parentId?: string;
  nombre: string;
  puesto: string;
}

const OrganigramaPersona: React.FC<{ data: Persona[] }> = ({ data }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !data.length) return;

    const chart = new OrgChart()
      .container(ref.current)
      .data(data)
      .nodeWidth(() => 250)
      .nodeHeight(() => 120)
      .nodeContent((d: any) => `
        <div style="padding:10px; border-radius:10px; background:#fff;
                    box-shadow:0 2px 6px rgba(0,0,0,0.2);
                    text-align:center;">
          <div style="font-weight:bold;">${d.data.nombre}</div>
          <div style="font-size:12px; color:#777;">${d.data.puesto}</div>
        </div>
      `)
      .render();

    chart.fit();
  }, [data]);

  return <div ref={ref} className="w-full h-screen" />;
};

export default OrganigramaPersona;
