"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { X } from "phosphor-react";

const questions = [
  {
    question: "Menurut kamu, kenapa hubungan kita dulu gagal?",
    options: [
      "Karena kamu keras kepala",
      "Karena aku overpossesive / protective",
      "Karena dua-duanya sama-sama gajelas",
      "Karena dunia ini pengen kita belajar dulu"
    ],
    correctAnswer: "Karena dunia ini pengen kita belajar dulu",
  },
  {
    question: "Dari semua mantan kamu, siapa yang paling ganteng?",
    options: [
      "Aku",
      "Aku versi waktu masih kurusan",
      "Kamu lupa tapi kayaknya masih aku",
      "Jangan maksaaa"
    ],
    correctAnswer: "Aku",
  },
  {
    question: "Kalau suatu hari kita tiba-tiba ketemu lagi, terus aku bilang ‘balikan yuk’, kamu bakal...",
    options: [
      "Langsung bilang iya xD",
      "Bilang ‘nggak usah deh, kita udah beda’",
      "Ketawa aja, pura-pura gak denger",
      "Tanya dulu: ‘Kamu serius?’"
    ],
    correctAnswer: "Ketawa aja, pura-pura gak denger", 
  },
  {
    question: "Kalau aku tiba-tiba gamon lagi ke kamu, kamu bakal...",
    options: [
      "Ngetawain aku hehehe",
      "Bales bilang ‘aku juga sebenernya...’",
      "Blokir biar aman ya ga",
      "Suruh aku tidur biar besok waras"
    ],
    correctAnswer: "Suruh aku tidur biar besok waras", 
  },
  {
    question: "Sekarang kamu ngerasa hubungan kita itu...",
    options: [
      "Kocak tapi berkesan",
      "Gagal tapi banyak pelajaran",
      "Random banget, tapi lucu",
      "Semua jawaban bener"
    ],
    correctAnswer: "Semua jawaban bener",
  },
  {
    question: "Kapan pertama kali kita saling confess?",
    type: "input",
    correctAnswer: "12 Desember 2021"
  }
];

export default function QuizPage({ onSuccess }: { onSuccess: () => void }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAnswer = (option: string) => {
    const current = questions[step];
    if (option.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase()) {
      setScore(score + 1);
    }
    nextStep();
  };

  const nextStep = () => {
    if (step + 1 >= questions.length) {
      setFinished(true);
    } else {
      setStep(step + 1);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (finished && score === questions.length) {
      const timer = setTimeout(() => {
        onSuccess();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [finished, score, onSuccess]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      {finished && score === questions.length ? (
        <Card className="border-4 border-black shadow-[6px_6px_0px_black] rounded-none max-w-2xl w-full p-6 bg-white">
          <CardHeader className="relative">
            <CardTitle className="text-3xl font-extrabold uppercase text-center">
              ummmmm seharusnya ini kamu, Aldea
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-bold">
            Tunggu sebentar ya...
          </CardContent>
        </Card>
      ) : finished ? (
        <Card className="border-4 border-black shadow-[6px_6px_0px_black] rounded-none max-w-2xl w-full p-6 bg-white relative">
          <div className="absolute -left-7 -top-5 bg-white border-black border-2 shadow-[2px_2px_0px_black]">
            <X className="size-12 text-red-600" />
          </div>
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold uppercase text-center text-red-600 flex">
              <p>Hmm... sepertinya bukan Aldeaa</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="font-bold">Coba lagi ya! Siapa tahu tadi salah pencet</p>
            <Button
              onClick={() => {
                setStep(0);
                setScore(0);
                setFinished(false);
              }}
              variant="destructive"
              className="border-2 border-black shadow-[3px_3px_0px_black] rounded-none font-bold uppercase hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Ulangi Quiz
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-4 border-black shadow-[6px_6px_0px_black] rounded-none max-w-6xl w-full p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-extrabold uppercase text-center">
              Pertanyaan {step + 1} dari {questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-0 md:px-6">
            <p className="text-xl font-bold">{questions[step].question}</p>

            {questions[step].type === "input" ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tulis jawabanmu..."
                  className="border-2 border-black w-full p-3 font-bold text-center rounded-none shadow-[3px_3px_0px_black] focus:outline-none"
                />
                <Button
                  onClick={() => handleAnswer(inputValue)}
                  className="border-2 border-black shadow-[3px_3px_0px_black] hover:bg-blue-300 rounded-none font-bold text-lg uppercase hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Kirim Jawaban
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {questions[step].options?.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="border-2 border-black shadow-[3px_3px_0px_black] hover:bg-blue-300 rounded-none font-bold text-xs md:text-lg uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
