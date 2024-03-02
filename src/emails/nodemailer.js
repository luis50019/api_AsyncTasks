//this document is responsible of send email
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "asynctaskweb@gmail.com",
    pass: "updt jngc sovr vjkf"
  },
});

export const sendEmail = async (user, task) => {
  const info = await transporter.sendMail({
    from: '"funcina"',
    to: `${user.email}`,
    subject: "RECORDATORIO DE TAREAS PENDIENTES",
    html: ` 
    <body>
  <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td align="center">
                  <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                    <tbody>
                      <tr>
                        <td style="background-color: transparent;" bgcolor="transparent" align="left">

                          <table cellspacing="0" cellpadding="0" align="left">
                            <tbody>
                              <tr>
                                <td width="280" align="left">
                                  <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td align="left" class="esd-block-text">
                                          <h1 style="color: #000080;"><strong>AsyncTasks</strong></h1>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table cellspacing="0" cellpadding="0" align="right">
                            <tbody>
                              <tr>
                                <td width="280" align="left">
                                  <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td align="left" class="esd-block-text">
                                          <h2>${user.username} tienes algunos pendientes</h2>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr>
                                <td width="560" align="center" valign="top">
                                  <table cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="font-size: 0px;"><a target="_blank"><img
                                              src="https://demo.stripocdn.email/content/guids/4c101d7b-8be0-4b5f-a216-bc68fb5f130b/images/image_email_2.jpg"
                                              alt style="display: block;" height="208"></a></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td align="center">
                  <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                    <tbody>
                      <tr>
                        <td align="left">
                          <table width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td width="560" valign="top" align="center">
                                  <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td align="left">
                                          <p><strong><em>"Cada paso que das te acerca más a tus metas. No subestimes el
                                                poder de la acción constante."</em></strong></p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td align="center">
                  <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                    <tbody>
                      <tr>
                        <td align="left">
                          <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr>
                                <td width="560" align="center" valign="top">
                                  <table cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="left">
                                          <h3 style="text-align: center;font-size:25px; color: #ff8c00;"><strong>Tareas
                                              Pendientes</strong></h3>
                                          <p><strong>Tareas por comenzar: </strong>${task.start}</p>
                                          <p><strong>Tareas por terminar: </strong>${task.progress}</p>
                                          <p><strong>Tares terminadas: </strong>${task.Done}</p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
`
  });
}

