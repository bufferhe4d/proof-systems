(function() {var implementors = {};
implementors["commitment_dlog"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: CanonicalDeserialize + CanonicalSerialize,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::PolyComm"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt;","synthetic":false,"types":["commitment_dlog::srs::SRS"]}];
implementors["export_test_vectors"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"export_test_vectors/vectors/struct.TestVectors.html\" title=\"struct export_test_vectors::vectors::TestVectors\">TestVectors</a>","synthetic":false,"types":["export_test_vectors::vectors::TestVectors"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"export_test_vectors/vectors/struct.TestVector.html\" title=\"struct export_test_vectors::vectors::TestVector\">TestVector</a>","synthetic":false,"types":["export_test_vectors::vectors::TestVector"]}];
implementors["kimchi"] = [{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/alphas/struct.Alphas.html\" title=\"struct kimchi::alphas::Alphas\">Alphas</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::alphas::Alphas"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/argument/enum.ArgumentType.html\" title=\"enum kimchi::circuits::argument::ArgumentType\">ArgumentType</a>","synthetic":false,"types":["kimchi::circuits::argument::ArgumentType"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.LookupConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::LookupConstraintSystem\">LookupConstraintSystem</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/polynomials/lookup/struct.LookupConfiguration.html\" title=\"struct kimchi::circuits::polynomials::lookup::LookupConfiguration\">LookupConfiguration</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::constraints::LookupConstraintSystem"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi::circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/constraints/struct.LookupConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::LookupConstraintSystem\">LookupConstraintSystem</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::constraints::ConstraintSystem"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi::circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::domains::EvaluationDomains"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Column.html\" title=\"enum kimchi::circuits::expr::Column\">Column</a>","synthetic":false,"types":["kimchi::circuits::expr::Column"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Variable.html\" title=\"struct kimchi::circuits::expr::Variable\">Variable</a>","synthetic":false,"types":["kimchi::circuits::expr::Variable"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.PolishToken.html\" title=\"enum kimchi::circuits::expr::PolishToken\">PolishToken</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::expr::PolishToken"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Linearization.html\" title=\"struct kimchi::circuits::expr::Linearization\">Linearization</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::expr::Linearization"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.CurrOrNext.html\" title=\"enum kimchi::circuits::gate::CurrOrNext\">CurrOrNext</a>","synthetic":false,"types":["kimchi::circuits::gate::CurrOrNext"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.LocalPosition.html\" title=\"struct kimchi::circuits::gate::LocalPosition\">LocalPosition</a>","synthetic":false,"types":["kimchi::circuits::gate::LocalPosition"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.SingleLookup.html\" title=\"struct kimchi::circuits::gate::SingleLookup\">SingleLookup</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::gate::SingleLookup"]},{"text":"impl&lt;SingleLookup&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.JointLookup.html\" title=\"struct kimchi::circuits::gate::JointLookup\">JointLookup</a>&lt;SingleLookup&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SingleLookup: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::gate::JointLookup"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.GateType.html\" title=\"enum kimchi::circuits::gate::GateType\">GateType</a>","synthetic":false,"types":["kimchi::circuits::gate::GateType"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.LookupInfo.html\" title=\"struct kimchi::circuits::gate::LookupInfo\">LookupInfo</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::gate::LookupInfo"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.LookupsUsed.html\" title=\"enum kimchi::circuits::gate::LookupsUsed\">LookupsUsed</a>","synthetic":false,"types":["kimchi::circuits::gate::LookupsUsed"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.GateLookupTable.html\" title=\"enum kimchi::circuits::gate::GateLookupTable\">GateLookupTable</a>","synthetic":false,"types":["kimchi::circuits::gate::GateLookupTable"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::gate::CircuitGate"]},{"text":"impl&lt;'a, F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.Circuit.html\" title=\"struct kimchi::circuits::gate::Circuit\">Circuit</a>&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::circuits::gate::Circuit"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomials/lookup/struct.LookupConfiguration.html\" title=\"struct kimchi::circuits::polynomials::lookup::LookupConfiguration\">LookupConfiguration</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomials::lookup::LookupConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/circuits/wires/struct.Wire.html\" title=\"struct kimchi::circuits::wires::Wire\">Wire</a>","synthetic":false,"types":["kimchi::circuits::wires::Wire"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/prover_index/struct.ProverIndex.html\" title=\"struct kimchi::prover_index::ProverIndex\">ProverIndex</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;&lt;G as AffineCurve&gt;::ScalarField&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::prover_index::ProverIndex"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/verifier_index/struct.LookupVerifierIndex.html\" title=\"struct kimchi::verifier_index::LookupVerifierIndex\">LookupVerifierIndex</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::verifier_index::LookupVerifierIndex"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/verifier_index/struct.VerifierIndex.html\" title=\"struct kimchi::verifier_index::VerifierIndex\">VerifierIndex</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::verifier_index::VerifierIndex"]}];
implementors["kimchi_visu"] = [{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_visu/witness/struct.Witness.html\" title=\"struct kimchi_visu::witness::Witness\">Witness</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Field,&nbsp;</span>","synthetic":false,"types":["kimchi_visu::witness::Witness"]}];
implementors["oracle"] = [{"text":"impl&lt;F:&nbsp;Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct oracle::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSpongeParams"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()