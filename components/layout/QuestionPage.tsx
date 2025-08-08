"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { X } from "phosphor-react";

const questions = [
  {
    question: "Apa makanan favorit Naila?",
    options: ["Mie Ayam", "Sushi", "Masakan Mama Naila", "Salad"],
    correctAnswer: "Masakan Mama Naila",
  },
  {
    question: "Tanggal ulang tahun Naila?",
    options: ["3 Agustus", "5 Agustus", "7 Agustus", "9 Agustus"],
    correctAnswer: "9 Agustus",
  },
  {
    question: "Apa warna favorit Naila?",
    options: ["Navy", "Pink", "Olive", "Warna yang bikin cerah"],
    correctAnswer: "Warna yang bikin cerah",
  },
   {
    question: "Apa minuman favorit Naila?",
    options: ["Coklat", "Matcha", "Kopi", "Jasmine Tea"],
    correctAnswer: "Jasmine Tea",
  },
  {
    question: "Apa username Naila di Roblox?",
    options: ["RAYRICK2", "GodOkis", "ItsMiaw", "nailaazzss"],
    correctAnswer: "nailaazzss",
  },
   {
    question: "Apa kegiatan Naila sekarang di Bandung?",
    options: ["LO", "SR", "Magang", "Volunteer"],
    correctAnswer: "LO",
  },
];


export default function QuizPage({ onSuccess }: { onSuccess: () => void }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleCorrect = () => {
    setScore(score + 1);
    nextStep();
  };

  const handleWrong = () => {
    nextStep();
  };

  const nextStep = () => {
    if (step + 1 >= questions.length) {
      setFinished(true);
    } else {
      setStep(step + 1);
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
    <div
      className={`min-h-screen w-full flex items-center justify-center p-6`}
    >
      {finished && score === questions.length ? (
        <Card className="border-4 border-black shadow-[6px_6px_0px_black] rounded-none max-w-lg w-full p-6 bg-white">
          <CardHeader className="relative">
            <CardTitle className="text-3xl font-extrabold uppercase text-center">
              ummmmm seharusnya ini kamu, Naila
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-bold">
            Tunggu sebentar ya...
          </CardContent>
        </Card>
      ) : finished ? (
        <Card className="border-4 border-black shadow-[6px_6px_0px_black] rounded-none max-w-lg w-full p-6 bg-white relative">
          <div className="absolute -left-7 -top-5 bg-white border-black border-2 shadow-[2px_2px_0px_black]">
            <X className=" size-12 text-red-600"/>
          </div>
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold uppercase text-center text-red-600 flex">
              <p>
                Hmm... sepertinya bukan nailaa
              </p>
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
        <Card className="border-4 border-black shadow-[6px_6px_0px_black] rounded-none max-w-2xl w-full p-8 ">
          <CardHeader>
            <CardTitle className="text-2xl font-extrabold uppercase text-center">
              Pertanyaan {step + 1} dari {questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xl font-bold">{questions[step].question}</p>
            <div className="grid grid-cols-2 gap-4">
              {questions[step].options.map((option) => (
                <Button
                  key={option}
                  onClick={() =>
                    option === questions[step].correctAnswer
                      ? handleCorrect()
                      : handleWrong()
                  }
                  className={`border-2 border-black shadow-[3px_3px_0px_black] hover:bg-blue-300 rounded-none font-bold text-lg uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
