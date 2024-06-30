import React, { useState, useContext } from 'react';
import { Card, Radio, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ExamContext } from './ExamContext';

const { Title, Text } = Typography;

const questions = [
  {
    code: 'FLT101', 
    question: "Flutter nedir?",
    options: [
       "Bir programlama dili",
       "Bir yazılım geliştirme kitaplığı ve aracı",
       "Bir işletim sistemi",
       "Bir veritabanı yönetim sistemi",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter hangi programlama dili kullanılarak geliştirilmiştir?",
    options: [
       "Java",
       "Swift",
       "Dart",
       "Python",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter uygulamaları hangi işletim sistemlerinde çalışabilir?",
    options: [
       "Yalnızca Windows",
       "Yalnızca macOS",
       "iOS ve Android",
       "Yalnızca Linux",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter'ın en büyük avantajı nedir?",
    options: [
       "Performans",
       "Çok platformlu destek",
       "Sadece iOS desteği",
       "Karmaşıklık",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter'da kullanılan widget türlerinden biri değildir?",
    options: [
       "Text",
       "Image",
       "Box",
       "Button",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter uygulamaları nasıl derlenir?",
    options: [
       "JIT (Just-In-Time)",
       "AOT (Ahead-Of-Time)",
       "Yalnızca interpretasyon",
       "Derlenme işlemi yok",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter'ın hangi şirket tarafından geliştirildiği bilinmektedir?",
    options: [
       "Apple",
       "Google",
       "Microsoft",
       "Facebook",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter'da Stateful ve Stateless widget arasındaki temel fark nedir?",
    options: [
       "Stateful widget'lar daha hızlı çalışır.",
       "Stateless widget'lar içerik değişikliğine izin vermez.",
       "Stateful widget'lar iç durum (state) tutabilir.",
       "Stateless widget'lar sadece metin içerir.",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter'da bir widget'i ekranda nasıl merkeze alırsınız?",
    options: [
       "Center widget kullanarak",
       "Align widget kullanarak",
       "Text widget kullanarak",
       "Container widget kullanarak",
    ],
  },
  {
    code: 'FLT101', 
    question: "Flutter'da widget'lar arası geçişler için en yaygın kullanılan yöntem nedir?",
    options: [
       "State yönetimi",
       "Navigator widget'ı",
       "Firestore",
       "HTTP istekleri",
    ],
  },
  {
    code: 'BIL202',
    question: "RAM kısaltması neyi ifade eder?",
    options: [
       "Random Access Memory",
       "Read Access Memory",
       "Randomly Accessed Memory",
       "Readily Accessed Memory",
    ],
  },
  {
    code: 'BIL202',
    question: "IP adresi kaç bit uzunluğundadır?",
    options: [
       "16 bit",
       "24 bit",
       "32 bit",
       "64 bit",
    ],
  },
  {
    code: 'BIL202',
    question: "Veri yapıları içinde yer alan 'queue' yapısı hangi tür veri yapısını temsil eder?",
    options: [
       "Yığıt (stack)",
       "Kuyruk (queue)",
       "Liste (list)",
       "Ağaç (tree)",
    ],
  },
  {
    code: 'BIL202',
    question: "Veri tabanları yönetim sistemlerinde 'SQL' kısaltması neyi ifade eder?",
    options: [
       "Structured Query Language",
       "Secure Query Language",
       "Simple Query Language",
       "System Query Language",
    ],
  },
  {
    code: 'BIL202',
    question: "Bir bilgisayarın işletim sistemi hangi seviyede çalışır?",
    options: [
       "0. seviye",
       "1. seviye",
       "2. seviye",
       "3. seviye",
    ],
  },
  {
    code: 'BIL202',
    question: "Bir bilgisayarın CPU'su hangi bileşen üzerinde bulunur?",
    options: [
       "Anakart (motherboard)",
       "Ekran kartı (graphics card)",
       "Sabit disk (hard drive)",
       "İşlemci (processor)",
    ],
  },
  {
    code: 'BIL202',
    question: "Bir bilgisayar ağında hangi cihaz ağ trafiğini yönlendirir?",
    options: [
       "Modem",
       "Switch",
       "Router",
       "Firewall",
    ],
  },
  {
    code: 'BIL202',
    question: "Programlama dillerinde 'Java' hangi tür bir dildir?",
    options: [
       "Derlenmiş dil (compiled language)",
       "Yorumlanmış dil (interpreted language)",
       "İşlevsel dil (functional language)",
       "Karma dil (hybrid language)",
    ],
  },
  {
    code: 'BIL202',
    question: "Bir bilgisayarın BIOS'u ne işe yarar?",
    options: [
       "Bilgisayarın işletim sistemini yükler",
       "Donanım testlerini yapar ve başlangıç ayarlarını kontrol eder",
       "Güvenlik duvarı ayarlarını yapar",
       "Bilgisayarın ağ bağlantısını yönetir",
    ],
  },
  {
    code: 'BIL202',
    question: "Veri iletişiminde kullanılan temel iletişim protokolleri nelerdir?",
    options: [
       "HTTP, FTP, SMTP",
       "TCP, UDP, IP",
       "JSON, XML, CSV",
       "SSL, TLS, SSH",
    ],
  }
  
 
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const { addQuestions, examCode } = useContext(ExamContext);

  
  const filteredQuestions = questions.filter(question => question.code === examCode);

 
  const handleAnswerChange = (index, e) => {
    setAnswers({
      ...answers,
      [index]: e.target.value,
    });
  };

  
  const handleSubmit = () => {
    navigate('/sonuc');
  };

  return (
    <div className="quiz-container">
      <Title level={2} style={{ textAlign: 'center' }}>Quiz</Title>
      {filteredQuestions.map((q, index) => (
        <Card key={index} className="question-card" style={{ marginBottom: '16px' }}>
          <Text strong>{`Soru ${index + 1}: `}</Text><Text>{q.question}</Text>
          <Radio.Group
            onChange={(e) => handleAnswerChange(index, e)}
            value={answers[index]}
            style={{ display: 'block', marginTop: '10px' }}
          >
            {q.options.map((option, i) => (
              <Radio key={i} value={option}>{option}</Radio>
            ))}
          </Radio.Group>
        </Card>
      ))}
      <Button
        type="primary"
        style={{ marginTop: '20px', backgroundColor: '#88deff', borderColor: '#88deff' }}
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== filteredQuestions.length} 
      >
        Gönder
      </Button>
      <Button
        type="default"
        style={{ marginTop: '20px', marginLeft: '10px' }}
        onClick={() => navigate('/ogrenci')}
      >
        Geri Dön
      </Button>
    </div>
  );


};

export default Quiz;
