const nodemailer = require('nodemailer');

/**
 * Gửi khảo sát qua email
 * @param {Array} emailList - Danh sách email người nhận
 * @param {Object} survey - Đối tượng khảo sát
 */
exports.sendSurveyEmail = async (emailList, survey) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = emailList.map((email) => ({
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Tham gia khảo sát: ${survey.title}`,
    text: `Bạn được mời tham gia khảo sát: "${survey.title}". Mô tả: ${survey.description}\n\nTruy cập liên kết sau để tham gia: ${process.env.CLIENT_URL}/surveys/${survey.id}`,
  }));

  for (let options of mailOptions) {
    await transporter.sendMail(options);
  }
};
