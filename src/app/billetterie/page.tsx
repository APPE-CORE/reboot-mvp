"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, CreditCard, CheckCircle, User, Mail, Sparkles, AlertTriangle, Download, ArrowRight, Calendar, MapPin, QrCode, ShieldCheck, Eye, Lock, Fingerprint, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BilletterieCheckout() {
  // Configuration du panier
  const [ticketQty, setTicketQty] = useState(1);
  const [productType, setProductType] = useState<"standard" | "tribu">("standard");
  
  // Coordonnées Acheteur Invité
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formError, setFormError] = useState("");
  
  // Module de temporisation du panier (CRO / Scarcity Benchmark)
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes en secondes
  const [isCartExpired, setIsCartExpired] = useState(false);
  
  // Interfaçage Pass Culture 
  const [passCultureCode, setPassCultureCode] = useState("");
  const [isPassCultureApplied, setIsPassCultureApplied] = useState(false);
  const [passCultureError, setPassCultureError] = useState("");

  // États du Tunnel de Transaction et Apple Pay
  const [isProcessing, setIsProcessing] = useState(false);
  const [isApplePayOpen, setIsApplePayOpen] = useState(false);
  const [applePayStage, setApplePayStage] = useState<"review" | "authenticating" | "processing">("review");
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Gestion du compte à rebours
  useEffect(() => {
    if (isSuccess || isCartExpired) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCartExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSuccess, isCartExpired]);

  // Retour en haut de page fluide lors du passage au succès
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSuccess]);

  // Formatage du temps
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Calculs tarifaires
  const UNIT_PRICE = productType === "standard" ? 20.00 : 15.00; 
  const multiplier = productType === "tribu" ? 4 : 1; 
  const rawTotal = UNIT_PRICE * ticketQty * multiplier;
  const finalTotal = isPassCultureApplied ? 0.00 : rawTotal; 

  const handleApplyPassCulture = (e: React.MouseEvent) => {
    e.preventDefault();
    setPassCultureError("");
    if (!passCultureCode.trim() || passCultureCode.trim().length < 5) {
      setPassCultureError("Format invalide. Saisissez votre code d'application.");
      return;
    }
    setIsPassCultureApplied(true);
  };

  const handleRemovePassCulture = () => {
    setIsPassCultureApplied(false);
    setPassCultureCode("");
  };

  const handleInitiatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!lastName.trim() || !firstName.trim() || !email.trim()) {
      setFormError("Toutes les informations acheteur sont obligatoires pour générer le pass.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Adresse e-mail invalide.");
      return;
    }

    if (!acceptTerms) {
      setFormError("Vous devez accepter le protocole de sécurité et le règlement intérieur de l'établissement.");
      return;
    }

    if (isPassCultureApplied) {
      executeFinalProcessing();
    } else {
      setApplePayStage("review");
      setIsApplePayOpen(true);
    }
  };

  const executeFinalProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsApplePayOpen(false);
      setIsSuccess(true);
      setOrderId(`RBT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 2000);
  };

  const triggerApplePayBiometrics = () => {
    setApplePayStage("authenticating");
    setTimeout(() => {
      setApplePayStage("processing");
      executeFinalProcessing();
    }, 1500);
  };

  // ==========================================
  // VUE ÉCRAN EXPIRÉ (RÉSERVATION PERDUE)
  // ==========================================
  if (isCartExpired) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md bg-[#050505] border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center gap-5">
          <div className="w-12 h-12 bg-red-950/30 border border-red-900 text-red-400 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-outfit text-xl font-medium text-white">Session Expirée</h2>
          <p className="font-inter text-xs text-white/60 leading-relaxed">
            Afin de libérer les places pour les autres participants face à la régulation stricte de la jauge ERP, vos accès temporaires ont été remis en circulation.
          </p>
          <button 
            onClick={() => { setIsCartExpired(false); setTimeLeft(600); }}
            className="w-full bg-white text-black py-3 rounded-xl font-inter font-bold text-xs uppercase tracking-wider transition-colors hover:bg-action-neon"
          >
            Réinitialiser mon panier
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VUE SUCCÈS : DIGITAL PASS WALLET
  // ==========================================
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 sm:px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1600')] bg-cover bg-center" />
        
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg z-10 flex flex-col gap-6">
          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 p-4 rounded-2xl backdrop-blur-md">
            <div className="w-10 h-10 bg-action-neon/10 border border-action-neon/30 rounded-full flex items-center justify-center text-action-neon shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-outfit text-sm font-bold text-white uppercase tracking-wide">Paiement Validé</span>
              <span className="font-inter text-xs text-white/50">ID Commande : {orderId}</span>
            </div>
          </div>

          <div className="bg-[#050505] border border-white/20 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative flex flex-col">
            <div className="p-5 bg-white/[0.02] border-b border-white/5 flex justify-between items-center">
              <span className="font-outfit font-bold text-sm tracking-tighter text-white">
                <span className="text-action-neon">A</span>BATTOIRS
              </span>
              <span className="bg-action-laser/10 border border-action-laser/30 text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                Saison 01 — Drop #1
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5 border-b border-dashed border-white/20 bg-transparent text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-white/40 font-mono text-[9px] uppercase tracking-wider block">Horaires</span>
                <span className="font-inter font-medium text-white">Samedi • 20h00 — 02h30</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/40 font-mono text-[9px] uppercase tracking-wider block">Lieu</span>
                <span className="font-inter font-medium text-white">Nef des Abattoirs, Toulouse</span>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-4 text-xs bg-white/[0.01]">
              <div className="flex flex-col border-b border-white/5 pb-3 gap-1">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">Titulaire du Pass</span>
                <div className="flex justify-between items-center text-white">
                  <span className="font-inter font-medium uppercase">{lastName} {firstName}</span>
                  <span className="font-inter text-white/60 font-light text-[11px]">{email}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">Détails Comptables</span>
                <div className="flex justify-between items-center text-white/80">
                  <span>Pass REBOOT ({productType === "standard" ? "Standard" : "Pack Tribu x4"})</span>
                  <span className="font-mono font-medium">x{ticketQty}</span>
                </div>
                {isPassCultureApplied && (
                  <div className="flex justify-between items-center text-action-neon text-[11px] font-medium">
                    <span>Financement Direct Pass Culture</span>
                    <span>- {rawTotal.toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-white font-bold border-t border-white/5 pt-3 mt-1 text-sm">
                  <span>Montant Débité</span>
                  <span className="font-outfit text-lg font-light text-action-neon">{finalTotal.toFixed(2)} €</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#000000] border-t border-white/10 flex flex-col items-center justify-center gap-3 text-center relative">
              <div className="absolute -left-[8px] -top-[8px] w-4 h-4 bg-black border border-white/20 rounded-full z-20" />
              <div className="absolute -right-[8px] -top-[8px] w-4 h-4 bg-black border border-white/20 rounded-full z-20" />

              <div className="p-3 bg-white border border-action-neon rounded-2xl shadow-md">
                <QrCode className="w-28 h-28 text-black" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                QR Code sécurisé à présenter au guichet de contrôle
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button onClick={() => alert("Pass REBOOT ajouté avec succès.")} className="flex-1 bg-white hover:bg-neutral-200 text-black py-3 rounded-xl font-inter font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors select-none">
              <Download className="w-4 h-4" /> Ajouter au Wallet
            </button>
            <Link href="/" className="flex-1 border border-white/20 hover:border-action-neon text-white hover:text-action-neon py-3 rounded-xl font-inter font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors select-none">
              Quitter le tunnel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-20 md:pt-12 pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-white/5 pb-5">
          <div className="flex flex-col items-start">
            <span className="font-montserrat text-action-neon font-bold tracking-[0.2em] uppercase text-[10px] mb-2">
              06 — Billetterie Officielle
            </span>
            <h1 className="font-outfit text-2xl md:text-3xl font-light text-white tracking-tight">
              Finaliser votre <span className="font-medium italic">réservation.</span>
            </h1>
          </div>
          
          {/* COMPTE À REBOURS CRYPTIQUE (CRO ACCÉLÉRATEUR) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-action-laser/10 border border-action-laser/30 self-start md:self-auto font-mono text-xs text-white">
            <Clock className="w-4 h-4 text-action-laser animate-pulse" />
            <span>Places réservées pendant :</span>
            <span className="text-action-laser font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* VOLET GAUCHE */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Étape 1 : Choix du Pass */}
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-action-neon bg-action-neon/10 px-2 py-0.5 rounded border border-action-neon/20 font-bold">01</span>
                <h2 className="font-outfit text-base font-medium">Sélection du Pass d'Accès</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div onClick={() => { setProductType("standard"); setTicketQty(1); }} className={`p-4 rounded-xl border cursor-pointer flex flex-col justify-between gap-4 transition-all duration-150 ${productType === "standard" ? "bg-white/[0.04] border-action-neon" : "bg-transparent border-white/10 hover:border-white/20"}`}>
                  <div className="flex flex-col">
                    <span className="font-outfit font-bold text-sm text-white">Entrée Individuelle</span>
                    <span className="font-inter text-xs text-white/50 mt-1">Accès complet à la nef monumentale et aux collections du musée de 20h00 à 02h30.</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="font-mono text-[9px] text-action-neon uppercase tracking-widest font-bold">Pass Culture OK</span>
                    <span className="font-outfit text-xl font-light text-white">20,00 €</span>
                  </div>
                </div>

                <div onClick={() => { setProductType("tribu"); setTicketQty(1); }} className={`p-4 rounded-xl border cursor-pointer flex flex-col justify-between gap-4 transition-all duration-150 ${productType === "tribu" ? "bg-white/[0.04] border-action-laser" : "bg-transparent border-white/10 hover:border-white/20"}`}>
                  <div className="flex flex-col">
                    <span className="font-outfit font-bold text-sm text-white">Pack Tribu (4 Personnes)</span>
                    <span className="font-inter text-xs text-white/50 mt-1">Accès simultané groupé de 20h00 à 02h30. Tarif préférentiel dégressif meublé.</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="font-mono text-[9px] text-action-laser uppercase tracking-widest font-bold">Avantage Groupe</span>
                    <span className="font-outfit text-xl font-light text-white">60,00 €</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-inter text-xs text-white/70">Quantité de lots :</span>
                <div className="flex items-center border border-white/20 rounded-xl overflow-hidden bg-black">
                  <button type="button" onClick={() => setTicketQty(Math.max(1, ticketQty - 1))} className="px-3 py-1.5 text-white hover:bg-white/5 text-xs font-bold">-</button>
                  <span className="px-3 py-1.5 font-mono text-xs font-bold text-white border-x border-white/10 min-w-[35px] text-center">{ticketQty}</span>
                  <button type="button" onClick={() => setTicketQty(Math.min(5, ticketQty + 1))} className="px-3 py-1.5 text-white hover:bg-white/5 text-xs font-bold">+</button>
                </div>
              </div>
            </div>

            {/* Étape 2 : Données Acheteur */}
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-action-neon bg-action-neon/10 px-2 py-0.5 rounded border border-action-neon/20 font-bold">02</span>
                <h2 className="font-outfit text-base font-medium">Informations Acheteur (Accès Invité)</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-[9px] uppercase tracking-wider text-white/40 font-bold">Nom</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs font-inter focus:border-action-neon outline-none text-white transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-inter text-[9px] uppercase tracking-wider text-white/40 font-bold">Prénom</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs font-inter focus:border-action-neon outline-none text-white transition-colors" />
                  </div>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1">
                  <label className="font-inter text-[9px] uppercase tracking-wider text-white/40 font-bold">Adresse E-mail de réception</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nom@exemple.com" className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs font-inter focus:border-action-neon outline-none text-white transition-colors" />
                  </div>
                </div>
              </div>

              {/* CASE À COCHER DE CONFORMITÉ OBLIGATOIRE */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={acceptTerms} 
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 bg-black border border-white/20 rounded accent-action-neon focus:ring-0 cursor-pointer"
                />
                <label htmlFor="terms" className="font-inter text-[11px] text-white/60 leading-relaxed cursor-pointer select-none">
                  J'atteste avoir pris connaissance du protocole de sécurité ERP de l'établissement : obligation de dépôt des sacs au vestiaire, présentation d'une pièce d'identité et <span className="text-white font-medium">application réglementaire de l'opercule opaque sur l'objectif caméra</span> à l'entrée.
                </label>
              </div>

              {formError && (
                <div className="flex items-center gap-1.5 text-red-400 font-mono text-[10px] mt-1 bg-red-950/10 border border-red-900/30 p-2 rounded-lg">
                  <AlertTriangle className="w-3.5 h-3.5" /> {formError}
                </div>
              )}
            </div>
          </div>

          {/* VOLET DROIT */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full sticky top-24">
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 md:p-7 flex flex-col gap-5 shadow-xl">
              <div className="flex flex-col border-b border-white/5 pb-3">
                <span className="font-montserrat text-[9px] text-action-laser uppercase tracking-widest font-bold">Commande</span>
                <h2 className="font-outfit text-lg font-medium text-white mt-0.5">Calcul et Validation</h2>
              </div>

              <div className="flex flex-col gap-2 bg-white/[0.01] border border-white/5 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-[11px] text-action-neon font-medium">
                  <Eye className="w-3.5 h-3.5 animate-pulse shrink-0" />
                  <span>14 personnes consultent ce drop actuellement</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 font-inter text-xs text-white/70 border-b border-white/5 pb-3">
                <div className="flex justify-between items-center">
                  <span>Pass Nocturne REBOOT <br/> (20h00 — 02h30)</span>
                  <span className="text-white font-mono font-medium">{UNIT_PRICE.toFixed(2)} € x {ticketQty * multiplier}</span>
                </div>
                {isPassCultureApplied && (
                  <div className="flex justify-between items-center text-action-neon font-medium text-[11px]">
                    <span>Subvention Pass Culture validée</span> <span>-{rawTotal.toFixed(2)} €</span>
                  </div>
                )}
              </div>

              {/* INTEGRATION PASS CULTURE */}
              <div className="flex flex-col gap-2 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                <span className="font-montserrat text-[9px] uppercase tracking-wider text-white/50 font-bold block">Bénéficiaire du Pass Culture (18-24 ans)</span>
                {!isPassCultureApplied ? (
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[11px] text-white/60 leading-relaxed">Saisissez votre code d'allocation pour neutraliser le montant de la transaction.</p>
                    <div className="flex gap-2 w-full mt-1">
                      <input type="text" value={passCultureCode} onChange={(e) => setPassCultureCode(e.target.value.toUpperCase())} placeholder="RBT-XXXXX" className="bg-black border border-white/10 rounded-xl px-3 py-2 text-xs font-mono uppercase focus:border-action-neon outline-none flex-1 min-w-0 text-white" />
                      <button type="button" onClick={handleApplyPassCulture} className="bg-white text-black hover:bg-action-neon text-xs font-inter font-bold px-4 rounded-xl transition-colors duration-150 shrink-0 select-none">Appliquer</button>
                    </div>
                    {passCultureError && (
                      <div className="flex items-center gap-1 text-red-400 font-mono text-[10px] mt-1">
                        <AlertTriangle className="w-3 h-3" /> {passCultureError}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-action-neon/10 border border-action-neon/30 p-2 rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-bold text-action-neon">Code validé : {passCultureCode}</span>
                      <span className="text-[10px] text-white/50">Panier ajusté à 0.00 €</span>
                    </div>
                    <button type="button" onClick={handleRemovePassCulture} className="text-xs text-white/40 hover:text-white underline font-medium">Annuler</button>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-baseline py-1">
                <span className="font-inter text-xs text-white/60">Net à prélever :</span>
                <span className="font-outfit text-3xl font-light tracking-tighter text-white">
                  {finalTotal.toFixed(2)}<span className="text-xl text-white/40 font-normal">€</span>
                </span>
              </div>

              <button
                onClick={handleInitiatePayment}
                className={`w-full font-inter font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 select-none ${
                  isPassCultureApplied ? "bg-action-neon text-black" : "bg-white text-black hover:bg-action-neon active:bg-action-neon"
                }`}
              >
                {isPassCultureApplied ? (
                  <><Sparkles className="w-4 h-4" /> Confirmer via Pass Culture</>
                ) : (
                  <><CreditCard className="w-4 h-4" /><span className="inline sm:hidden">Apple Pay</span><span className="hidden sm:inline">Procéder au paiement Apple Pay</span></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          INTERFACE APPLE PAY SYSTEME (iOS)
         ========================================== */}
      <AnimatePresence>
        {isApplePayOpen && (
          <div className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/60 backdrop-blur-xs">
            <div className="absolute inset-0 bg-transparent" onClick={() => !isProcessing && setIsApplePayOpen(false)} />

            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 240 }} className="w-full max-w-lg bg-[#1C1C1E] text-white rounded-t-2xl p-5 z-10 font-sans border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] relative flex flex-col pb-8">
              <div className="absolute right-0 top-20 w-1 h-14 bg-white/40 rounded-l-md hidden md:block" />

              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="font-semibold text-white text-sm">Apple Pay</span>
                <button onClick={() => !isProcessing && setIsApplePayOpen(false)} className="text-xs font-medium text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full" disabled={applePayStage === "processing"}>Annuler</button>
              </div>

              {applePayStage === "review" && (
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center py-3.5 border-b border-white/5 hover:bg-white/[0.02] px-1 cursor-pointer group">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider w-20">Carte</span>
                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <div className="w-8 h-5 bg-gradient-to-br from-indigo-900 to-black rounded border border-white/10 flex items-center justify-center text-[7px] font-black text-white">VISA</div>
                      <span className="text-xs text-neutral-200">Banque Populaire (•••• 8892)</span> <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                  </div>

                  <div className="flex justify-between items-start py-3.5 border-b border-white/5 hover:bg-white/[0.02] px-1 cursor-pointer group">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider w-20 pt-0.5">Facturation</span>
                    <div className="flex items-center gap-3 flex-1 justify-end text-right">
                      <div className="flex flex-col text-xs">
                        <span className="font-semibold text-white uppercase">{lastName} {firstName}</span>
                        <span className="text-neutral-400 text-[11px] mt-0.5">{email}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3.5 border-b border-white/5 px-1">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider w-20">Marchand</span>
                    <span className="text-xs font-medium text-white">REBOOT TOULOUSE</span>
                  </div>

                  <div className="flex justify-between items-center py-4 px-1 mt-2">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">PAYER</span>
                    <span className="text-2xl font-semibold font-mono text-white">{finalTotal.toFixed(2)} €</span>
                  </div>

                  <div className="mt-2 p-1 relative flex flex-col items-center">
                    <button onClick={triggerApplePayBiometrics} className="w-full bg-white text-black py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 select-none">
                      <Fingerprint className="w-4 h-4" /> Confirmer avec Face ID
                    </button>
                    <span className="text-[10px] text-neutral-500 text-center mt-2 font-mono uppercase tracking-wider">Double-cliquez sur le bouton latéral pour valider</span>
                  </div>
                </div>
              )}

              {applePayStage === "authenticating" && (
                <div className="py-14 flex flex-col items-center justify-center gap-4 text-center">
                  <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-16 h-16 bg-action-neon/10 border border-action-neon/50 rounded-full flex items-center justify-center text-action-neon">
                    <Fingerprint className="w-8 h-8" />
                  </motion.div>
                  <span className="text-xs text-neutral-300 animate-pulse">Vérification Face ID...</span>
                </div>
              )}

              {applePayStage === "processing" && (
                <div className="py-14 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="w-8 h-8 border-2 border-neutral-600 border-t-white rounded-full animate-spin" />
                  <span className="text-xs text-neutral-400">Chiffrement de la transaction...</span>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}