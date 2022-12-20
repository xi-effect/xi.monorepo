// НЕ ПЕРЕНОСИТЕ ЭТУ ИКОНКУ, ОНА КРАШИТ BIT
import React from 'react';
import { SvgIcon } from '@mui/material';

export type ChatProps = {
  [key: string]: any;
};

export const Chat = ({ ...props }: ChatProps) => (
  <SvgIcon {...props}>
    <path d="M7.34 3.046a4.934 4.934 0 0 0-1.52.471c-1.23.603-2.132 1.623-2.557 2.89-.257.765-.237.205-.252 7.41-.015 7.391-.039 6.802.294 7.126a.945.945 0 0 0 .979.243c.097-.03.973-.534 1.947-1.119l1.77-1.064 4.37-.014c3.933-.013 4.396-.021 4.642-.082.984-.243 1.732-.636 2.395-1.259.739-.695 1.202-1.491 1.463-2.517l.109-.431V7.3l-.109-.431c-.261-1.026-.724-1.822-1.462-2.516a5.095 5.095 0 0 0-2.808-1.311c-.42-.052-8.854-.048-9.261.004m9.416 2.043c.889.274 1.569.851 1.948 1.651.298.63.296.597.296 4.26 0 3.636 0 3.629-.284 4.238-.424.906-1.164 1.495-2.138 1.702-.235.05-.96.059-4.705.059L7.445 17l-1.172.705c-.645.387-1.196.713-1.224.724-.041.016-.049-1.036-.039-5.474.014-6.133-.012-5.599.302-6.251a3.046 3.046 0 0 1 2.191-1.662c.108-.019 2.186-.03 4.617-.027 3.999.007 4.441.014 4.636.074m-8.903 4.982a1.245 1.245 0 0 0-.104 2.318c.465.213.999.11 1.374-.266a1.229 1.229 0 0 0-.793-2.107c-.2-.014-.324.001-.477.055m3.847-.036c-.377.1-.764.456-.882.811-.1.302-.065.716.083.989a1.248 1.248 0 0 0 2.198 0c.148-.273.183-.687.083-.989-.086-.258-.37-.579-.632-.711-.214-.108-.633-.158-.85-.1m3.758 0c-.545.141-.946.64-.95 1.182-.003.376.106.643.369.906a1.233 1.233 0 0 0 2.113-.797 1.234 1.234 0 0 0-1.16-1.309 1.663 1.663 0 0 0-.372.018" />
  </SvgIcon>
);
